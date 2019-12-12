import {Component, OnInit} from '@angular/core';
import { AuthService } from './auth.service';
import {TranslatePipe} from  '../app/pipe/translate.pipe';
import {TranslateService} from  '../app/pipe/translate.service';
import { Router } from '@angular/router';
import {FirebaseMessageService} from './_services/firebase.messege.service';
declare function  dir(): any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  public local: string;


  constructor(public _translate: TranslateService, private router: Router, private fireMessage: FirebaseMessageService) {}

  ngOnInit() {
    this.fireMessage.requestPermission().subscribe(console.log);
    this.fireMessage.receiveMessage().subscribe(console.log);
    // small-header
    if ( this._translate.getlocalLang() === 'ar') {
      dir();
    }
    // this.local=this._TranslatePip.getlocalLang();
  }
}
