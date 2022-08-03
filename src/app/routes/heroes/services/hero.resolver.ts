import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Hero } from '../models/hero.model';
import { HeroService } from './hero.service';

@Injectable({
  providedIn: 'root'
})
export class HeroResolver implements Resolve<Hero> {

  constructor(private apiHero: HeroService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Hero> {
    const id = route.params['id'];
    return this.getHero(id);
  }
  getHero(id: number) {
    return this.apiHero.getHero$(id)
  }
}
