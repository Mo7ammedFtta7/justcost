import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';
import { AuthService } from '../auth.service';

@Directive({
  selector: '[appLike]'
})
export class LikeDirective {
  @Input('appLike') producID: string;

  constructor(private _auth: AuthService, private renderer: Renderer2, private hostElement: ElementRef) { }

  ngOnInit() {
    if (this._auth.loggedIn() && this._auth.user()['userInfo']['likedProducts'].includes(this.producID)) {
      this.renderer.addClass(this.hostElement.nativeElement, 'fas');
      console.log(this.producID)
    }

  }

}
