import { NgModule } from '@angular/core';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { MaterialModule } from '@shared/material.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    HeroesListComponent
  ],
  imports: [
    SharedModule,
    HeroesRoutingModule,
    MaterialModule
  ]
})
export class HeroesModule { }
