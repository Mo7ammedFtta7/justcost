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
  attrsFilter = [];
  skeleton=[1,2,3,4];
  loadedResult = true;
  products: any[];
  filterProducts = [];
  oregenal = [];
  le: number;
  _ = _ ;
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
  attributes:any[]= [];
  attrs2: any;
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
    this.rest.search(params).subscribe((data) => {
      // @ts-ignore

      this.products = data.data;
      this.oregenal = data.data;
      this.filterProducts = data.data;
      console.log(this.filterProducts);
      this.loadedResult = false;
      this.le = this.products.length;
      const att = [];
      data.data.forEach(item => {
        item.attributes.forEach(element => {
          console.log(element);
          att.push({name:element.attributes_group.name,attributes:element.attribute})
        });
        this.attributes = att;
      });
      console.log(_.groupBy(att,'name'));
      this.attrs2 = _.groupBy(att,'name');
      // this.attrs2 =  _.uniqWith(this.attrs2, _.isEqual);
      console.log(this.attrs2);
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
          this.filterProducts = _.orderBy(this.oregenal,['ratings'],['desc']);
        break;
      case "2":
          this.filterProducts = _.orderBy(this.oregenal,['sale_price'],['desc']);
        break;
      case "3":
          this.filterProducts = _.orderBy(this.oregenal,['sale_price'],['asc']);
        break;

      default:
        break;
    }
  }
  getInfoMap(product) {
    this.product = product;
    if (this.product) {
      this.lat = parseInt(product.location.lat);
      this.lng = parseInt(product.location.long);
    }
  }
  like(id) {
    // @ts-ignore
    this.checkFav(id)
    this.api.toggleLike(id);
  }
checkFav(id){
  return this.auth.user().userInfo.likedProducts.includes(id) ? true : false ;
}
  filterByBrand(brand) {
    this.filterProducts = _.filter(this.oregenal,['brand',brand])
  }
  getAll(value) {
    if (value) {
      this.filterProducts = this.oregenal;
    }

  }
  filterByAttributes(event) {
    let isCheck = event.currentTarget.checked;
    let value = event.target.value
    if (isCheck) {
      this.attrsFilter.push(value)
    } else {
      this.attrsFilter = _.remove(this.attrsFilter ,function(n) {
        return n != value;
      });
    }
    this.filterProducts = this.filterByArray(this.attrsFilter);
  }

  filterByArray(values=[]) {
    let o = [];
    if (values.length < 1) {
      return this.oregenal;
    }
    values.forEach(element => {
     o = _.concat(_.filter(this.oregenal, { attributes: [{ attribute: {id: Number(element)} }] }),o);
    });
    return  _.uniqWith(o , _.isEqual);
  }

}
