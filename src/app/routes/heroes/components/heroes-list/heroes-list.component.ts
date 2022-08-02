import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

import { DeleteDialogComponent } from '@shared/components/delete-dialog/delete-dialog.component';
import { Hero } from '../../models/hero.model';
import { HeroService } from '../../services/hero.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnDestroy, OnInit {
  public heroesList: Hero[] = [];

  public displayList: Hero[] = [];

  public qtyXPage = 4
  public quantities = [4, 8, 24]

  public nameSearch: string = 'name';

  public showDelay = new FormControl(1000);
  public hideDelay = new FormControl(200);

  private destroy$: Subject<boolean> = new Subject();

  constructor(
    private apiHeroes: HeroService,
    public dialog: MatDialog
  ) {
    this.apiHeroes.heroes$.pipe(takeUntil(this.destroy$)).subscribe(e => {
      this.heroesList = e;
    });
  }

  ngOnInit(): void {
    this.getHeroesByName();
  }
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  getHeroesByName(name: string = '') {
    this.apiHeroes.getHeroes$(name).subscribe({
      next: u => {
        let heroesList: any = u;
        this.apiHeroes.setHeroes(heroesList);
        this.showList();
      },
      error: err => console.error('Observer got an error: ' + err),
    });
  }

  deleteHero(id: number) {
    this.apiHeroes.deleteHero$(id).subscribe({
      next: arg => {
        let heroesList: any = this.heroesList.filter((h: any) => {
          return h.id !== id;
        });
        this.apiHeroes.setHeroes(heroesList);
        this.showList();
      },
      error: err => console.error('Observer got an error: ' + err),
    })
  }

  openDeleteDialog(event: any, index: number): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      minWidth: '450px',
      maxHeight: '85vh',
      data: {
        element: event,
        type: 'hero'
      },
    });
    dialogRef.beforeClosed().pipe(takeUntil(this.destroy$)).subscribe(result => {
      if (result !== '' && result !== undefined) {
        dialogRef.afterClosed().pipe(takeUntil(this.destroy$)).subscribe(res => {
          this.deleteHero(res.id);
        });
      }
    });
  }

  showList() {
    this.displayList = this.heroesList.slice(0, this.qtyXPage);
  }

  paginate(pagination: any) {
    let current = pagination.pageIndex * pagination.pageSize
    this.displayList = this.heroesList.slice(
      current,
      current + pagination.pageSize
    );
  }


}
