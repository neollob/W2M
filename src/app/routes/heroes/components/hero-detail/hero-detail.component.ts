import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../../models/hero.model';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  public heroForm: FormGroup;
  private identifier: number = 0;
  private newId: number = 0;

  constructor(
    private apiHero: HeroService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    public route: ActivatedRoute,
    private router: Router
  ) {
    this.heroForm = this.fb.group({
      name: ['', Validators.required],
      realname: [''],
      team: [''],
      firstappearance: [''],
      createdby: [''],
      publisher: [''],
      imageurl: [''],
      bio: ['']
    });
  }

  get name() {
    return this.heroForm.get('name');
  }
  get realname() {
    return this.heroForm.get('realname');
  }
  get team() {
    return this.heroForm.get('team');
  }
  get firstappearance() {
    return this.heroForm.get('firstappearance');
  }
  get createdby() {
    return this.heroForm.get('createdby');
  }
  get publisher() {
    return this.heroForm.get('publisher');
  }
  get imageurl() {
    return this.heroForm.get('imageurl');
  }
  get bio() {
    return this.heroForm.get('bio');
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(
      (response) => {
        if (response['hero']) this.setForm(response['hero']);
        else this.getNewId();
      }
    );
  }

  getNewId() {
    this.apiHero.getHeroes$().subscribe({
      next: heroes => {
        let totalHeroes: Hero[] = heroes;
        let max = Math.max.apply(Math, totalHeroes.map((h: Hero) => { return h.id; }));
        this.newId = max + 1;
      }
    })
  }

  setForm(hero: Hero) {
    this.heroForm.patchValue({
      name: hero.name,
      realname: hero.realname,
      imageurl: hero.imageurl,
      team: hero.team,
      firstappearance: hero.firstappearance,
      createdby: hero.createdby,
      publisher: hero.publisher,
      bio: hero.bio
    });
  }

  saveHero() {
    const hero: Hero = {
      id: this.identifier,
      name: this.name?.value.toUpperCase(),
      realname: this.realname?.value,
      team: this.team?.value,
      firstappearance: this.firstappearance?.value,
      createdby: this.createdby?.value,
      publisher: this.publisher?.value,
      imageurl: this.imageurl?.value,
      bio: this.bio?.value,
    }
    if (this.identifier > 0) {
      this.editHero(hero);
    } else {
      hero.id = this.newId;
      this.addHero(hero);
    }
  }

  editHero(hero: Hero) {
    this.apiHero.editHero$(hero).subscribe({
      next: arg => { },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => {
        // console.log('Observer got a complete notification');
        this.router.navigate(['/heroes']);
      }
    })
  }

  addHero(hero: Hero) {
    this.apiHero.addHero$(hero).subscribe({
      next: arg => { },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => {
        // console.log('Observer got a complete notification');
        this.router.navigate(['/heroes']);
      }
    })
  }

}
