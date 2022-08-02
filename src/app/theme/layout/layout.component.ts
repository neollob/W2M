import { AfterViewChecked, Component, OnDestroy } from '@angular/core';
import { LoadingSpinnerService } from '@core/services/loading-spinner.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements AfterViewChecked, OnDestroy {

  public title = 'Superhéroes';

  public spinnerActive: boolean = true;

  private showSpinnerSubscription!: Subscription;

  constructor(public spinner: LoadingSpinnerService) { }

  ngOnDestroy(): void {
    if (this.showSpinnerSubscription) this.showSpinnerSubscription.unsubscribe();
  }

  showSpinner = (state: boolean): void => {
    this.spinnerActive = state;
  };

  ngAfterViewChecked() {
    this.showSpinnerSubscription = this.spinner.showSpinner.subscribe(this.showSpinner.bind(this));
  }
}
