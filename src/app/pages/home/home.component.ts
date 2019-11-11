import { Component, OnInit, OnDestroy } from '@angular/core';
import { apis } from '../../_services/apis';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { slider } from '../../_models/slider';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { environment } from '../../../environments/environment';
import { Icategory } from '../../_models/category';
import { RestService } from '../../_services/rest.service';
import { Router } from '@angular/router';
import { ApiService } from '../../_services/api.service';
import { TranslateService } from '../../pipe/translate.service';
declare function nav(type): any;

//declare function owl():any ;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public sliders = [];
  public items:any[] = [];
  public categories: Icategory[];
  categoriesurl = environment.ApiUrl + 'nest';
  countries: any[];
  lang : string =this.translate.getlocalLang();

  public errorMsg;
  constructor(private translate: TranslateService, private _api: ApiService, public rest: RestService, private router: Router) { }

  ngOnInit() {

    nav("larg");
    this.rest.getCountries().subscribe(
      res => {
        this.countries = res.data
      },
      err => {
        console.log(err)
      })

    // owl();
    this.getitems();
    this.getCategoris()
  }

  getitems() {
    var sub = this.rest.getFavProducts().subscribe(data=> {
      var xx:any[] = data['data'];
      //  = data['data'].map(item=>{
      //   if (item.media.length==0) {
      //     item.media.push({id: 172, product_id: 0, url: "#", flag: 1, type: "jpeg"})
      //   }
      //   // item['discount']=this.math(item.reg_price,item.sale_price)
      //   // console.log(item)

      // });

      xx.map(item=>{
        if (item.media.length==0) {
          item.media.push({id: 0, product_id: 0, url: "#", flag: 1, type: "jpeg"})
        }
        item['discount']=this.math(item.reg_price,item.sale_price)+"%";
        return item;
      })

      console.log(xx)
     this.items=xx;
    });
    this._api.sub("getitems", sub)
  }

  getCategoris() {
    var sub = this._api.categoris().subscribe(
      res => this.categories = res['data'],
      error => this.errorMsg = error)
      this._api.sub("getCategoris", sub)
  }

  public math(aa: any, bb: any) {
    return ((aa - bb) / aa * 100).toFixed(0)
  }

  ngOnDestroy() {
    this._api.unsub(["getCategoris", "getitems"])
  }

}
