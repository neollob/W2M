import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroResolver } from './resolvers/hero.resolver';

const routes: Routes = [
  { path: '', component: HeroesListComponent },
  {
    path: 'edit/:id',
    component: HeroDetailComponent,
    resolve: {
      hero: HeroResolver
    }
  },
  { path: 'new', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
