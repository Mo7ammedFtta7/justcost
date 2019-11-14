import { Component, OnInit } from '@angular/core';
import { RestService } from '../../_services/rest.service';
import { ActivatedRoute, Params } from '@angular/router';
import {remove} from 'lodash';
import { HttpParams } from '@angular/common/http';
import {environment} from '../../../environments/environment';
declare function nav(type: any);
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  products: any[];
  filterProducts = [];
  search: string;
  category: string;
  sub: any;
  product: any;
  lat: number;
  lng: number;
  brands = [];
  Brands: any[] = [];
  fillterBrand = [];
  public paramsa: any[] = new Array();

  constructor(public rest: RestService, private route: ActivatedRoute) { }

  ngOnInit() {

    nav('sma ll');
    this.route.queryParams.subscribe(param => {
      Object.keys(param).map(i => {
        this.paramsa[i] = param[i];
      });
      this.getAttributes(this.paramsa);
    });
  }

  public math(aa: any, bb: any) {
    return ((aa - bb) / aa * 100).toFixed(2);
  }

  public filter(filterForm) {}

  onKey(key) {
    this.search = key;
    this.paramsa['search'] = key;
    this.getAttributes(this.paramsa);
  }

  getAttributes(params) {
    params['limit'] = '100';
    this.rest.getProductss(params).subscribe((data) => {
      // @ts-ignore

      this.products = data['data'];
      this.filterProducts = data.data;

      data['data'].forEach(item => {
        if (!this.brands.includes(item.brand)) {
          this.brands.push(item.brand);
        }
      });
    });
  }
  getInfoMap(product) {
    this.product = product;
    if (this.product) {
      this.lat = parseInt(product.location.split(',')[0], 0);
      this.lng = parseInt(product.location.split(',')[1], 0);
    }
  }

  filterByBrand(brand) {
    (this.fillterBrand.includes(brand)) ? remove(this.fillterBrand, r => r === brand) : this.fillterBrand.push(brand);
  }
}
