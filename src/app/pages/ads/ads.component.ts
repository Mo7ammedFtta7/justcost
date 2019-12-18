import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../../pipe/translate.service';
import {ApiService} from '../../_services/api.service';
import {Axios} from '../../_services/axios';
import { ActivatedRoute } from '@angular/router';
import {ToastrService} from 'ngx-toastr'
import { Ng2ImgMaxService } from 'ng2-img-max';
import { NgForm } from '@angular/forms';
import * as _ from 'lodash';
@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {
  images: FileList;
  attVal = [];
  subCategoryList:any;
  Icategory = [];
  brands:any;
  attriGroup:any;
  selectedValue = [];
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
  constructor(private axios: Axios,private ng2ImgMax: Ng2ImgMaxService,private toastr:ToastrService,private route: ActivatedRoute,private api: ApiService,public translate: TranslateService) {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
   }
   toNumber(num){
     return Number(num);
   }
  ngOnInit() {
    //  **  api of ads
    this.api.get("adsget/"+this.id).subscribe(
      next => {
        this.ads = next.data;
        console.log(this.ads);
        this.loaded = false;
      }
      ,
      error => {
        this.loaded = false;
      }
    );
//  ** End  api of countries
// ------------------------------------------------------------------------------------------------------
  //  **  api of countries
    this.api.get('countries').subscribe(
      next=> {
        this.country = next.data;
      }
    );
    //  ** End api of countries
    // ------------------------------------------------------------------------------------------------------
  //  **  api of categories
  this.api.get('nest').subscribe(
    next=> {
      this.Icategory = next.data;
      console.log(this.Icategory)
    }
  );
  //  ** End api of categories
  }
  selectProduct(product){
    this.currentProduct =product;
    console.log(product);

    this.getBrands(product.category.parent_id,product);

  }
  showNewProduct(){
    this.currentProduct = this.ads.products[0];
    this.getBrands(this.currentProduct.category.parent_id,this.currentProduct);
  }
  getBrands(id,product){
    let cate = this.Icategory.find(x=> x.id== id);
    this.subCategoryList = cate.subs;
    this.brands = cate.brands;
    this.attriGroup = cate.attributes_group;
    this.attriGroup.forEach(element => {
      let value = [];
      if (product) {
        product.attributes.forEach(item => {
          if (element.id == item.attribute.group_id) {
            value.push(item.attribute);
          }
        });
      }

      this.selectedValue[element.id] = value;
    });
  }
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
  check(id){
    // let parse = this.selectedValue[id][0];
    this.attVal = _.remove(this.attVal, function(n) {
      return n.attributes_group_id  !=id;
    });
    this.selectedValue[id].forEach((item)=>{
      this.attVal.push({attribute_id:item.id,attributes_group_id:item.group_id})
    });
    console.log(this.attVal);
  }
  editProduct(form:NgForm){
    if (form.invalid) {
      return;
    }
    console.log(this.currentProduct);
    const fd = new FormData(); // ** Form data that is Hold Data
    for (let index = 0; index < this.images.length; index++) { // append images to form data
      const image = this.images[index];
      this.ng2ImgMax.compressImage(image,0.040).subscribe( // comapress image to 40 kb
        result => {
          let newIimage = new File([result], result.name); // comapress image to 40 kb
          fd.append('media[]', newIimage); // append comopress image to form data
        },
        error => {
          console.log('😢 Oh no!', error);
        }
      );
  }
  fd.set('fromWeb','1')
  fd.set('category_id', this.currentProduct.category.id);
  fd.set('reg_price', this.currentProduct.reg_price);
  fd.set('sale_price', this.currentProduct.sale_price);
  fd.set('brand_id',this.currentProduct.brand.id);
  // fd.set('media', product.value.media);
  fd.set('qty', this.currentProduct.qty);
  fd.set('ad_id', "125");
  // fd.set('iswholesale', this.ads.iswholesale);
  fd.set('title', this.currentProduct.title);
  fd.set('description', this.currentProduct.description);
  fd.set('ispaided', "0");
  let attrs = _.uniqWith(this.attVal, _.isEqual);
  attrs.forEach(r => {
    fd.append('attributes[]',JSON.stringify(r));
  });
  this.axios.post('product',fd).then(
    next=>{
      console.log(next);
    })
}
  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const files = event.target.files;
      console.log(files);
      this.images = files;
    }
  }
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
