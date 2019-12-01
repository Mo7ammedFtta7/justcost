import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../../pipe/translate.service';
import {ApiService} from '../../_services/api.service';
@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {
  products;
  product: any;
  lat: number;
  lng: number;
  p:number = 1;
  constructor(private api: ApiService,public translate: TranslateService) { }

  ngOnInit() {
    this.api.get("adsget/1").subscribe(
      next => {
        console.log(next.data);
      }
    );
  }
  public math(aa: any, bb: any) {
    return ((aa - bb) / aa * 100).toFixed(0);
  }
  like(id) {
    this.api.toggleLike(id);
  }
  getInfoMap(product) {
    this.product = product;
    if (this.product) {
      this.lat = parseInt(product.location.split(',')[0], 0);
      this.lng = parseInt(product.location.split(',')[1], 0);
    }
  }
}
