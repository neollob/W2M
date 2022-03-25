import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { Hero } from '../models/hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private apiURL = `${environment.API_URL}heroes`;
  private heroes: BehaviorSubject<Hero[]> = new BehaviorSubject<Hero[]>([]);

  public heroes$ = this.heroes.asObservable();

  constructor(private http: HttpClient) { }

  setHeroes(value: Hero[]) {
    this.heroes.next(value);
  }
  
  getHero$(id: number) {
    const hero = this.http.get<Hero>(`${this.apiURL}/${id}`);
    return hero;
  }

  getHeroes$(name: string = '') {
    const heros = this.http.get<Hero>(`${this.apiURL}?name_like=${name}&_sort=name&_order=asc`);
    return heros;
  }

  editHero$(hero: Hero) {
    return this.http.put<Hero>(`${this.apiURL}/${hero.id}`, hero).pipe(
      tap((h: Hero) => console.log(`edited Hero: id=${h.id}`)),
      catchError(err => {
        console.log(err);
        return throwError(()=>err);
      })
    );
  }

  addHero$(hero: Hero) {
    return this.http.post<Hero>(`${this.apiURL}`, hero).pipe(
      tap((h: Hero) => {
        return h;
      }),
      catchError(err => {
        console.log(err);
        return throwError(()=>err);
      })
    );
  }

  deleteHero$(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

}
