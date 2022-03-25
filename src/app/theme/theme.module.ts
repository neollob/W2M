import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@core/core.module';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    SharedModule,
    CoreModule
  ]
})
export class ThemeModule { }
