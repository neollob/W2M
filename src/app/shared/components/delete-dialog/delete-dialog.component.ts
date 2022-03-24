import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  element: any;
  type: string;
}

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {
  public title: string = '';
  public message: string = '';

  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: DialogData
  ) {
    if (dialogData.type === 'hero') {
      let hero: any = dialogData.element;
      this.title = 'Delete hero'
      this.message = `Are you sure you want to delete the hero called "${hero.name}"`
    }
  }

  closeDialog(element = null) {
    this.dialogRef.close(element);
  }

  ngOnInit(): void {
  }

}
