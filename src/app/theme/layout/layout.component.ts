import { AfterViewChecked, Component } from '@angular/core';
import { LoadingSpinnerService } from '@core/services/loading-spinner.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements AfterViewChecked {

  public title = 'Superhéroes';

  public spinnerActive: boolean = true;

  constructor(public spinner: LoadingSpinnerService) { }

  showSpinner = (state: boolean): void => {
    this.spinnerActive = state;
  };

  ngAfterViewChecked() {
    this.spinner.showSpinner.subscribe(this.showSpinner.bind(this));
  }
}
