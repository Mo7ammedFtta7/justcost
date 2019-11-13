import {Directive, ElementRef, Input, Renderer2} from '@angular/core';
import {ApiService} from '../_services/api.service';

@Directive({
  selector: '[appLike]'
})
export class LikeDirective {
  @Input() xx: number;



  constructor(private renderer: Renderer2, hostElement: ElementRef,private api:ApiService) {

    // if (api.likes().find(value => {if(this.idNum==value){return true;}})) {
    //   renderer.addClass(hostElement.nativeElement, 'fas');
    // }
  }


  ngOnInit(){
    //console.log("this.api.likes()");
    console.log(this.xx);
  }
}
