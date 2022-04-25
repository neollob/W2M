import { Directive, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[nameCase]'
})
export class NameCaseDirective {

  constructor(private el: ElementRef) { }

  @HostBinding('formControlName.upper')
  get upperC() {
    return this.el.nativeElement.value = this.el.nativeElement.value.toUpperCase();
  }
  /* @HostListener('input')
  onInput() {
    if (this.el.nativeElement.value) {
      this.el.nativeElement.value = this.el.nativeElement.value.toUpperCase();
    }
  } */
}
