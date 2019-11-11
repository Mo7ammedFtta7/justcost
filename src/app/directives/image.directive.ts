import { Directive, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appImage]'
})
export class ImageDirective {

  @Input()
  default = 'https://placeimg.com/640/480/any';

  @HostBinding('src')
  @Input()
  src: string;

  @HostListener('error')
  onError() {
    this.src = this.default;
    console.log("error");
  }

}
