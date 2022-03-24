import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';

import { NameCaseDirective } from './directives/nameCase';

import { MainHeaderComponent } from './components/main-header/main-header.component';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';

const COMPONENTS = [MainHeaderComponent, DeleteDialogComponent];
const THIRD_MODULES = [FlexLayoutModule]
const DIRECTIVES = [NameCaseDirective];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    ...THIRD_MODULES
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    ...COMPONENTS,
    ...THIRD_MODULES,
    ...DIRECTIVES
  ]
})
export class SharedModule { }
