import {Component, OnInit} from '@angular/core';
import {TranslateService } from './pipe/translate.service';
import { Router } from '@angular/router';
import {FirebaseMessageService} from './_services/firebase.messege.service';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import * as _ from 'lodash';
import {ApiService} from './_services/api.service';
declare function  dir(): any;
export interface Item { name: string; price: number; }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  public local: string;
  itemCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  data:any;
  _ = _;
  google_play:any;
  app_store:any;
  facebook:any;
  twitter:any;
  instagram:any;
  linkedin:any;
  constructor(public _translate: TranslateService,
              private router: Router,
              private afs: AngularFirestore,
              private api: ApiService,
              private fireMessage: FirebaseMessageService) {}

  async ngOnInit() {

    this.api.get('links').subscribe(
      next => {
        this.data  = next.data;
        this.google_play = _.filter(this.data,['link','googleplay'])[0].value;
        this.app_store = _.filter(this.data,['link','app_store'])[0].value;
        this.facebook = _.filter(this.data,['link','facebook'])[0].value;
        this.twitter = _.filter(this.data,['link','twitter'])[0].value;
        this.instagram = _.filter(this.data,['link','instagram'])[0].value;
        this.linkedin = _.filter(this.data,['link','linkedin'])[0].value;
      }
    );
    if ( this._translate.getlocalLang() === 'ar') {
      dir();
    }
  }
}
