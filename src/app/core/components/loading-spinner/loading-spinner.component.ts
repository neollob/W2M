import { Component, Input } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { LoadingSpinnerService } from '@core/services/loading-spinner.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent {
  @Input() value = 100;
  @Input() diameter = 100;
  @Input() mode: ProgressSpinnerMode = 'indeterminate';
  @Input() strokeWidth = 10;
  @Input() overlay: boolean = false;
  @Input() color = 'primary';

  private showSpinnerSubscription!: Subscription;

  public spinnerActive: boolean = true;

  constructor(public spinner: LoadingSpinnerService) {
    this.showSpinnerSubscription = this.spinner.showSpinner.subscribe(this.showSpinner.bind(this));
  }

  showSpinner = (state: boolean): void => {
    this.spinnerActive = state;
  };

  ngOnDestroy(): void {
    if (this.showSpinnerSubscription) this.showSpinnerSubscription.unsubscribe();
  }

}
