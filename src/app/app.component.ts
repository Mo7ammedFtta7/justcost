import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import {TranslatePipe} from  '../app/pipe/translate.pipe';
import {TranslateService} from  '../app/pipe/translate.service';
import { Router } from '@angular/router';
declare function  dir():any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public local:string


  constructor(public _translate : TranslateService,private router: Router){}

  ngOnInit() {
    console.log(this.router.url);
    // small-header
    if ( this._translate.getlocalLang()=="ar") {
      dir();
    }
    //this.local=this._TranslatePip.getlocalLang();
  }
}
