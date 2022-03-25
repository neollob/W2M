import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingSpinnerService } from '@core/services/loading-spinner.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(public spinner: LoadingSpinnerService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.spinner.handleRequest('show');
    return next.handle(request)
      .pipe(
        finalize(() => {
          this.spinner.handleRequest();
        })
      );
  }
}
