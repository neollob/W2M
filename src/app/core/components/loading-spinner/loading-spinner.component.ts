import { Component, Input } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

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

  constructor() { }

}
