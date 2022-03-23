import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MainHeaderComponent } from './components/main-header/main-header.component';

const COMPONENTS = [MainHeaderComponent];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule, FormsModule, RouterModule, ReactiveFormsModule
  ],
  exports: [
    CommonModule, FormsModule, RouterModule, ReactiveFormsModule, ...COMPONENTS
  ]
})
export class SharedModule { }
