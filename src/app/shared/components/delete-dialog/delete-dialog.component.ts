import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hero } from 'app/routes/heroes/models/hero.model';

export interface DialogData {
  element: Hero;
  type: string;
}

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent {
  public title: string = '';
  public message: string = '';

  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: DialogData
  ) {
    if (dialogData.type === 'hero') {
      let hero: Hero = dialogData.element;
      this.title = 'Eliminar héroe'
      this.message = `¿Está seguro de que desea eliminar el héroe llamado "${hero.name}"?`
    }
  }

  closeDialog(element: Hero) {
    this.dialogRef.close(element);
  }

}
