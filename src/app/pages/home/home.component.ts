import { Component, OnInit, OnDestroy } from '@angular/core';
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
  loaded = true;
  lang : string =this.translate.getlocalLang();

  public errorMsg;
  constructor(public translate: TranslateService, private _api: ApiService, public rest: RestService, private router: Router) { }

  ngOnInit() {

    nav("larg");
    this.rest.getCountries().subscribe(
      res => {
        this.countries = res.data
      },
      err => {
      })

    // owl();
    this.getitems();
    this.getCategoris()
  }
  goToProduct(id){
    this.router.navigate(['/product/', id]);
  }
  getitems() {
    var sub = this.rest.getFavProducts().subscribe(data=> {
      this.loaded = false;
      var xx:any[] = data['data'];
      xx.map(item=>{
        if (item.media.length==0) {
          item.media.push({id: 0, product_id: 0, url: "#", flag: 1, type: "jpeg"})
        }
        item['discount']=this.math(item.reg_price,item.sale_price)+"%";
        return item;
      })
     this.items=xx;
     if(this.items.length > 0)
     this.loaded = false;
    });
    this._api.sub("getitems", sub)
  }

  getCategoris() {
    var sub = this._api.categoris().subscribe(
      res => {this.categories = res['data'];  },
      error => this.errorMsg = error)
      this._api.sub("getCategoris", sub)
  }

  public math(aa: any, bb: any) {
    return ((aa - bb) / aa * 100).toFixed(0);
  }

  ngOnDestroy() {
    this._api.unsub(["getCategoris", "getitems"])
  }

}
