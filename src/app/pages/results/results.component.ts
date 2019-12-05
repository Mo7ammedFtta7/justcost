import {Component, OnInit, ViewChildren} from '@angular/core';
import { RestService } from '../../_services/rest.service';
import { ActivatedRoute, Params } from '@angular/router';
import * as _ from 'lodash';
import { HttpParams } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {AuthService} from '../../auth.service';
import {ApiService} from '../../_services/api.service';
import { TranslateService } from '../../pipe/translate.service';
declare function nav(type: any);
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  @ViewChildren('res') res;
  skeleton=[1,2,3,4];
  loadedResult = true;
  products: any[];
  filterProducts = [];
  oregenal = [];
  le: number;
  p: number = 1;
  search: string;
  category: string;
  sub: any;
  itemsPerPage = 4;
  product: any;
  lat: number;
  lng: number;
  brands = [];
  Brands: any[] = [];
  attributes = [];
  filterBrand: string;
  attrs = [];
  public paramsa: any[] = new Array();

  constructor(public translate: TranslateService,public rest: RestService, private api: ApiService, private route: ActivatedRoute, public auth: AuthService) {
  }

  ngOnInit() {
    nav('small');
    this.route.queryParams.subscribe(param => {
      Object.keys(param).map(i => {
        this.paramsa[i] = param[i];
      });
      this.getAttributes(this.paramsa);
    });
  }

  public math(aa: any, bb: any) {
    return ((aa - bb) / aa * 100).toFixed(0);
  }

  public filter(filterForm) {
  }

  onKey(key) {
    this.search = key;
    this.paramsa['search'] = key;
    this.getAttributes(this.paramsa);
  }

  getAttributes(params) {
    this.attributes = [];
    this.brands = [];
    params['limit'] = '100';
    this.rest.getProductss(params).subscribe((data) => {
      // @ts-ignore

      this.products = data.data;
      this.oregenal = data.data;
      this.filterProducts = data.data;
      console.log(this.filterProducts);
      this.loadedResult = false;
      this.le = this.products.length;
      const att = [];
      data.data.forEach(item => {
        if (!att.includes(item.attributes) && item.attributes != null) {
          att.push(item.attributes);
        }
        this.attributes = att;
      });
      this.attributes = _.split(att[0], ',');
      data['data'].forEach(item => {
        if (!this.brands.includes(item.brand)) {
          this.brands.push(item.brand);
        }
      });
    });
  }
  sortP(id){
    switch (id) {
      case "1":
          this.filterProducts = _.orderBy(this.filterProducts,['ratings'],['desc']);
        break;
      case "2":
          this.filterProducts = _.orderBy(this.filterProducts,['sale_price'],['desc']);
        break;
      case "3":
          this.filterProducts = _.orderBy(this.filterProducts,['sale_price'],['asc']);
        break;

      default:
        break;
    }
  }
  getInfoMap(product) {
    this.product = product;
    if (this.product) {
      this.lat = parseInt(product.location.split(',')[0], 0);
      this.lng = parseInt(product.location.split(',')[1], 0);
    }
  }
  like(id) {
    // @ts-ignore
    this.api.toggleLike(id);
  }

  filterByBrand(brand) {
    this.filterBrand = brand;
  }
  filterByAttributes(attr) {
    this.filterProducts = this.products;
    this.attrs.includes(attr) ? _.remove(this.attrs, r => r === attr) : this.attrs.push(attr);
    this.attrs.forEach(r => {
      this.filterProducts = _.filter(this.filterProducts, atr =>  _.includes(atr.attributes, r));
    });
  }
}
