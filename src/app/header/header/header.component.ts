import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { RestService } from '../../_services/rest.service';

import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '../../pipe/translate.service';
import { ApiService } from '../../_services/api.service';
import {EncryptService} from '../../_services/encrypt.service';
import {environment} from '../../../environments/environment';
import * as _ from 'lodash';
import {FirebaseMessageService} from '../../_services/firebase.messege.service';
import {FireBaseNotification} from '../../_models/category';
import {ToastrService} from 'ngx-toastr';
import {Observable} from 'rxjs';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  citis: any[];
  countries: any[];
  Search: string;
  categories: any[];
  errorMsg: any;
  Category = '';
  city = '';
  env = environment;
  notification;
  notificationArray: FireBaseNotification[] = [];
  firebaseToken: Observable<string>;
  _ = _;
  lang: string = this.translate.getlocalLang();
  constructor(public _authService: AuthService,
              private _rea: RestService,
              private _api: ApiService,
              public encrypt: EncryptService,
              public toastr: ToastrService,
              public firebaseMessage: FirebaseMessageService,
              public router: Router, public translate: TranslateService) { }
   ngOnInit() {
    // if (this._authService.loggedIn()) { console.log(this._authService.user()); }
     this.firebaseToken =  this.firebaseMessage.token;
     this.firebaseMessage.token.subscribe(console.log);
    this.notification = this.firebaseMessage.receiveMessage();
    this.firebaseMessage.receiveMessage().subscribe(message => this.notificationArray.push(message));


    // this.getCitisOfCountry(this._authService.getUser().country.id);
    this._rea.getCountries().subscribe(
      res => {
        this.countries = res.data;
        // console.log(res.data[0]['id'])
        this.getCitisOfCountry(res.data[0]['id']);
      },
      err => {
        console.log(err);
      });

    this._api.categoris().subscribe(res => {
    this.categories = res['data'];
    }, error => this.errorMsg = error);

    // this.getCitisOfCountry(this.countries[0]);

  }
  selectCat(event: any) {
    this.Category = event.target.value;
  }

  GoSearch(Search) {
    const queryParams = {};
    // search:this.Search
    if (this.Search != undefined) {
      queryParams['Search'] = this.Search;
    }

    if (this.Category != '0' || this.Category != null) {
      queryParams['category'] = this.Category;
    }

    if (this.city != '0' || this.Category != null) {
      queryParams['city'] = this.city;
    }

    console.log(queryParams);

    this.router.navigate(['/results'], { queryParams: queryParams });
  }

  getCitisOfCountry(countryId) {
    this._rea.getCitis(countryId).subscribe(
      res => {
        this.citis = res.data;
        // console.log(res.data);
      },
      err => {
        console.log(err);
      });
  }

  selectCity(event: any) {
    this.city = event.target.value;
  }
  readNotify(notify: FireBaseNotification) {
    _.remove(this.notificationArray, notify);
    this.router.navigate([notify.notification.click_action]);
  }


  subscribeNotification(e) {
    e.preventDefault();
    this.firebaseMessage.requestPermission().subscribe(token => this.saveFirebaseToken(token));
  }

  unSubscribeNotification(e) {
    e.preventDefault();
    this.firebaseMessage.requestPermission().subscribe(token => this.removeFirebaseToken(token));
  }

  saveFirebaseToken(token) {
    return this._api.post('firebase_tokens', {firebaseToken: token}).subscribe(
      next => { this.toastr.info('تم الاشتراك بنجاح '); console.log(token); },
      err => this.toastr.error('فشلت العملية ')
    );
  }
  removeFirebaseToken(token) {
    return this._api.post('remove_firebase_tokens', {firebaseToken: token}).subscribe(
      next => {  this.toastr.info('تم إلغاء الاشتراك  بنجاح '); this.firebaseMessage.deleteToken(); },
      err => this.toastr.error('فشلت العملية ')
    );
  }

}
