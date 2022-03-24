import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent {

  @Input() searchField: string = '';
  @Output() searchData = new EventEmitter();

  public data: string = '';

  constructor() { }

  getData(event: string) {
    this.searchData.emit(event);
  }

}
