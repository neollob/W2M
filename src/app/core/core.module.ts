import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { MaterialModule } from '@shared/material.module';

const COMPONENTS = [
  LoadingSpinnerComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class CoreModule { }
