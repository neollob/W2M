import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NameCaseDirective } from './directives/nameCase';

const COMPONENTS = [MainHeaderComponent];
const THIRD_MODULES = [
  FlexLayoutModule,
]

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    FormsModule,
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
  ]
})
export class SharedModule { }
