import { error } from '@angular/compiler/src/util';
import { Component, OnInit,ViewChild } from '@angular/core';
import { TranslateService } from '../../pipe/translate.service';
import {ApiService} from '../../_services/api.service';
import {Axios} from '../../_services/axios';
import { ActivatedRoute } from '@angular/router';
import {ToastrService} from 'ngx-toastr'
import { Ng2ImgMaxService } from 'ng2-img-max';
import { NgForm } from '@angular/forms';
import * as _ from 'lodash';
declare var $;
@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {
  @ViewChild('newProduct', {static: false}) public form: NgForm;
  images: FileList;
  _=_;
  disableSubmit = false;
  loadSubmit = false;
  editSubmit = false;
  addSubmit = false;
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
    this.addSubmit = false;
    this.editSubmit = true;
    this.currentProduct =product;
    console.log(product);

    this.getBrands(product.category.parent_id,product);

  }
  enableToggel(item){  // ** this function make ads enable  or disabled
    this.disableSubmit = true; // ** to show spinner loading
    if (this.ads.status.id == 3) {  // ** if ads is enable make it disabled
      this.api.post('ads/'+this.ads.id+'/disable',{}).subscribe( // ** call API for disable Ads
        next => {
          this.disableSubmit = false; // ** stop spinner loading
          this.ads.status.id = 5; // ** make it disable
          this.toastr.success('ads disabled successful'); // ** alert message
        },
        error => {
          this.disableSubmit = false; // ** stop spinner loading
          console.log(error);
        }
      ); // ** end API
    } // ** end if
    if (this.ads.status.id == 5) { // ** if ads is disabled make it enable
      this.api.post('ads/'+this.ads.id+'/enable ',{}).subscribe( // ** call API for enable Ads
        next => {
          this.disableSubmit = false; // ** stop spinner loading
          this.ads.status.id = 3; // ** make it enable
          this.toastr.success('ads enabled successful'); // ** alert message
        },
        error => {
          this.disableSubmit = false; // ** stop spinner loading
          console.log(error);
        }
      ); // ** end API
    } // ** end if
  } // ** end function
  showNewProduct(f: NgForm){
    this.editSubmit = false;
    this.addSubmit = true;
    // this.currentProduct = this.ads.products[0];
    let obj = {
      "productId": 0,
      "title": "",
      "category": {
        "id": '',
        "name": "",
        "name_ar": "",
        "parent_id": 0,
        "image": null,
        "sort_order": 0,
        "status": 0,
        "flag": 0,
        "created_at": "2019-09-16 02:22:26",
        "updated_at": null,
        "deleted_at": null
      },
      "customerId": 0,
      "customerName": "",
      "customerMobile": "123456",
      "customerPic": "",
      "description": "",
      "mobile": "",
      "location": {
        "long": "",
        "lat": ""
      },
      "reg_price": '',
      "sale_price": '',
      "qty": null,
      "city": {
        "id": 0,
        "name": "",
        "arName": "",
        "countryId": 0
      },
      "brand": {
        "id": 0,
        "category_id": 0,
        "name": "HP",
        "img": "g",
        "created_at": null,
        "deleted_at": null,
        "updated_at": null
      },
      "ratings": 0,
      "media": [
        {
          "id": 0,
          "product_id": 0,
          "url": "",
          "flag": 0,
          "type": ""
        }
      ],
      "postedOn": 1111111111111,
      "likes": 0,
      "attributes": []
    }
    this.currentProduct = obj;
    this.getBrands(this.currentProduct.category.parent_id,this.currentProduct);
    setTimeout(()=>{this.form.resetForm();},200);

  }
  getBrands(id,product){
    let cate = this.Icategory.find(x=> x.id== id);
    if(cate){
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
    console.log(this.currentProduct);
    if (form.invalid) {
      return;
    }
    this.loadSubmit = true;
    const fd = new FormData(); // ** Form data that is Hold Data
    if(this.images){
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
    } // ** end for
    }

  fd.set('fromWeb','1')
  fd.set('category_id', this.currentProduct.category.id);
  fd.set('reg_price', this.currentProduct.reg_price);
  fd.set('sale_price', this.currentProduct.sale_price);
  fd.set('brand_id',this.currentProduct.brand.id);
  // fd.set('media', product.value.media);
  fd.set('qty', this.currentProduct.qty);
  fd.set('ad_id', this.ads.id);
  fd.set('iswholesale', '1');
  fd.set('title', this.currentProduct.title);
  fd.set('description', this.currentProduct.description);
  fd.set('ispaided', "0");
  let attrs = _.uniqWith(this.attVal, _.isEqual);
  attrs.forEach(r => {
    fd.append('attributes[]',JSON.stringify(r));
  });
setTimeout(() => {
  if (this.editSubmit) {
    this.axios.post('products/'+this.currentProduct.productId,fd).then(
      next=>{
        console.log(next.data.data);
        this.loadSubmit = false;
        $('#addproduct').modal('hide');
        this.toastr.success('product updated successfuly');
      });
  }
  if (this.addSubmit) {
    this.axios.post('products',fd).then(
      next=>{
        this.loadSubmit = false;
        console.log(next.data.data);
        this.form.resetForm();
        $('#addproduct').modal('hide');
        this.toastr.success('product add successfuly');
        this.ads.products.unshift(next.data.data);
      });
  }
}, 500);


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
