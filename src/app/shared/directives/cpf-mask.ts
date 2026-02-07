import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCpfMask]',
  standalone: true
})
export class CpfMask {

  constructor(private readonly el: ElementRef<HTMLInputElement>) { }

  @HostListener('input')
  onInput() {
    let value = this.el.nativeElement.value;

    value = value.replaceAll(/\D/g, '');

    value = value.substring(0, 11);

    value = value
      .replace(/^(\d{3})(\d)/, '$1.$2')
      .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
      .replace(/\.(\d{3})(\d)/, '.$1-$2');

    this.el.nativeElement.value = value;
  }
}
