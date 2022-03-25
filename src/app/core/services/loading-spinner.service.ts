import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingSpinnerService {

  public requests: number = 0;
  public showSpinner: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  handleRequest = (action: string = ''): void => {
    this.requests = (action === 'show') ? this.requests + 1 : this.requests - 1;
    this.showSpinner.next(this.requests > 0);
  };
}
