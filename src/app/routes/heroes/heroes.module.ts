import { NgModule } from '@angular/core';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { MaterialModule } from '@shared/material.module';
import { SharedModule } from '@shared/shared.module';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    HeroesListComponent,
    HeroSearchComponent,
    HeroDetailComponent
  ],
  imports: [
    SharedModule,
    HeroesRoutingModule,
    MaterialModule
  ]
})
export class HeroesModule { }
