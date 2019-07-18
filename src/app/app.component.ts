import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import {TranslatePipe} from  '../app/pipe/translate.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public local:string

  constructor(private _authService: AuthService,public _TranslatePip : TranslatePipe){}

  ngOnInit() {
    this.local=this._TranslatePip.getlocalLang();
  }
}
