import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../../pipe/translate.service';
import {ApiService} from '../../_services/api.service';
import { ActivatedRoute } from '@angular/router';
import {ToastrService} from 'ngx-toastr'
@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {
  Icategory:any
  subCate:any;
  Brands:any;
  attriGroup:any;
  selectedValue:[];
  editLoad = false;
  currentProduct:any;
  ads:any;
  country:any;
  Console = console;
  city:any;
  editAble = false;
  loaded = true;
  product: any;
  lat: number;
  id:number;
  lng: number;
  p:number = 1;
  skeleton=[1,2,3,4];
  itemsPerPage = 4;
  constructor(private toastr:ToastrService,private route: ActivatedRoute,private api: ApiService,public translate: TranslateService) {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
   }
   toNumber(num){
     return Number(num);
   }
  ngOnInit() {
    // this.ads['lat'] = 25.276987;
    // this.ads['lng'] = 55.296249;
    this.api.get("adsget/"+this.id).subscribe(
      next => {
        this.ads = next.data;
        this.loaded = false;
      }
      ,
      error => {
        this.loaded = false;
      }
    );

    this.api.get('countries').subscribe(
      next=> {
        this.country = next.data;
      }
    )
  }
  selectProduct(item){
    this.currentProduct =item;
    console.log(item);
  }
  getBrands(item){}
  editAds(){
    this.editLoad = true;
    let payload ={
      ad_title: this.ads.ad_title,
      ad_description: this.ads.ad_description,
      mobile: this.ads.mobile,
      cityId: this.ads.cityId.id,
      lat: this.ads.lat,
      lng: this.ads.lng,
      iswholesale: this.ads.iswholesale
    }
    console.log(payload);
    this.api.post('ads/'+this.ads.id,payload).subscribe(
      next =>{
        this.editLoad = false;
        console.log(next.data);
        this.ads = next.data;
        this.editAble = false;
        this.toastr.success('ads successfull updated','ads');
      },
      error =>{
        this.editLoad = false;
      }
    );
  }
  check(){}
  onFileSelect(event) {}
  onSelectLocation(event) {
    this.ads.lat = event.coords.lat;
    this.ads.lng = event.coords.lng;
  }
  public math(aa: any, bb: any) {
    return ((aa - bb) / aa * 100).toFixed(0);
  }
  getCity(id) {
    let country = this.country.find(e => e.id == id);
    this.city = country.cities;
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
