import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[nameCase]'
})
export class NameCaseDirective {

  constructor(private el: ElementRef) { }

  @HostListener('keyup') onKeyUp() {
    if (this.el.nativeElement.value) {
      this.el.nativeElement.value = this.el.nativeElement.value.toUpperCase();
    }
  }
}
