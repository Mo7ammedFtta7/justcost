import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../../pipe/translate.service';
import {ApiService} from '../../_services/api.service';
import { ActivatedRoute } from '@angular/router';
import { error } from '@angular/compiler/src/util';
@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {
  ads:any;
  loaded = true;
  product: any;
  lat: number;
  id:number;
  lng: number;
  p:number = 1;
  skeleton=[1,2,3,4];
  itemsPerPage = 4;
  constructor(private route: ActivatedRoute,private api: ApiService,public translate: TranslateService) {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
   }

  ngOnInit() {
    this.api.get("adsget/"+this.id).subscribe(
      next => {
        this.ads = next.data;
        this.loaded = false;
        console.log(next.data);
      }
      ,
      error => {
        this.loaded = false;
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
      this.lat = parseInt(product.location.lat);
      this.lng = parseInt(product.location.long);
    }
  }
}
