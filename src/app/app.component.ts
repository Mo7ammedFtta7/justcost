import {Component, OnInit} from '@angular/core';
import {TranslateService } from './pipe/translate.service';
import { Router } from '@angular/router';
import {FirebaseMessageService} from './_services/firebase.messege.service';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
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

  constructor(public _translate: TranslateService,
              private router: Router,
              private afs: AngularFirestore,
              private api: ApiService,
              private fireMessage: FirebaseMessageService) {}

  async ngOnInit() {
   //  this.fireMessage.requestPermission().subscribe(console.log);
    // this.fireMessage.receiveMessage().subscribe(console.log);
    // this.itemCollection = this.afs.collection<Item>('items');
   //  this.items = this.itemCollection.valueChanges();
    // this.items.subscribe(console.log);
    // small-header
    if ( this._translate.getlocalLang() === 'ar') {
      dir();
    }
    // this.local=this._TranslatePip.getlocalLang();
  }
}
