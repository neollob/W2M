import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    SharedModule
  ]
})
export class ThemeModule { }
