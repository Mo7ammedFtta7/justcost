import {Component, OnInit, Output, Input} from '@angular/core';
import {environment} from '../../../environments/environment';
import {RestService} from '../../_services/rest.service';
import {NgForm, FormGroup} from '@angular/forms';
import {Icategory, Isub} from '../../_models/category';
import {AuthService} from '../../auth.service';
import {ApiService} from '../../_services/api.service';
import axios from 'axios';
import {ToastrService} from 'ngx-toastr'
import { ActivatedRoute,Params } from '@angular/router';
// import { $ } from 'protractor';
declare var $:any;
// import { threadId } from 'worker_threads';
//declare function subs(id):any ;
declare function success(msg): any;
declare function SetMap(): any;
declare function getMarker(): any;
declare function nav(type): any;

@Component({
  selector: 'app-postadd',
  templateUrl: './postadd.component.html',
  styleUrls: ['./postadd.component.css']
})
export class PostaddComponent implements OnInit {
  subAds = false;
  subload = false;
  subCate:any;
  axios = axios;
  categoriesurl = environment.ApiUrl + 'nest';
  errorMsg: any;
  categories: any[]
  brands: any[]
  citis: any[]
  create: NgForm
  showProduct = [];
  newProduct: NgForm
  newProducts: any[] = []
  Brands;
  totalMyAds;
  category_id: number = 5;
  Icategory: Icategory[]
  Isub: Isub[]
  user: any
  phone: string
  lat: "25.200279"
  lng: "55.274819"
  wholeSale:any;
  products: any[] = []
  param = [];
  paramsDestroy;
  marker = {
    lat: "25.200279",
    lng: "55.274819"
  }
  countries: any;
  images: FileList;

  constructor(private routerActive: ActivatedRoute,private toastr:ToastrService,public rest: RestService, public _authService: AuthService, private _api: ApiService, private _rea: RestService) {
    const param = this.routerActive.queryParams.subscribe((params: Params) => {
      if (params.wholeSale) {
        this.wholeSale =  params.wholeSale;
      }
    });
  }
  ngOnInit() {
    nav("hide");
    this._api.get('myads').subscribe((next)=>{
      this.totalMyAds = next.data.length;
    });

    this._rea.getCountries().subscribe(
      res => {
        this.countries = res.data;
        this.getCitisOfCountry(res.data[0]['id']);
      },
      err => {
      });



    this._api.categoris().subscribe(res => {
        this.Icategory = res['data'];
        this.getBrands(res['data'][0]['id']);
      },
      error => this.errorMsg = error);

    this.user = this._authService.getUser().userInfo
    this.phone = this.user.phone
  }
  getCitisOfCountry(countryId) {
    this._rea.getCitis(countryId).subscribe(
      res => {
        this.citis = res.data;
      },
      err => {
      });
  }
  ref(id) {
    this.create.value.category_id = 5
  }



  addnew(newProduct: NgForm) {
    //this.newProducts.push(newProduct.value)
    this.addproduct(newProduct)


    console.table(this.newProducts)

  }



  send(categoryId) {


    const headers = {
      Authorization: `Bearer  ${this._authService.user().token}`,
      'Content-Type': 'multipart/form-data'
    };



    this.newProducts.forEach(product => {
      product.set('ad_id', categoryId);



      this.axios.post(environment.ApiUrl + "products", product, {
        headers
      }).then(res => {


      }).catch(err => {} )


    });

  }

  onSelect(id) {
    const xx = this.Icategory.filter((item) => item.id == id);
    this.Isub = xx[0]['subs']
  }

  createadd(ad: NgForm) {

    // create.value.category_id = 9;
    ad.value.ispaided = 0;
    ad.value.iswholesale = this.wholeSale;
    ad.value.keywordsId = 1;
    ad.value.customerId = this.user.id;
    ad.value.lat = this.marker.lat;
    ad.value.lng = this.marker.lng;
    ad.value.ad_description = ad.value.description
    if (ad.valid) {
      if (this.showProduct.length > 0) {
        this.subAds = true;
        this._rea.createadd(ad.value)
          .subscribe(
            res => {

              this.send(res['data'])
              this.subAds = false;
              ad.resetForm();
              delete this.showProduct;
              delete this.newProducts;
              this.toastr.success("Product Added succsefuly!");
            },
            err => {
              this.subAds = false;
            }
          )
      } else {
        this.toastr.warning("choose product first");
      }
    }

  }


  getBrands(id) {
    // get subCategories
    this.subload =  true;
    this._api.get('subCategories/'+id).subscribe((next)=>{
      this.subload =  false;
      this.subCate = next.data;
      console.log(this.subCate);
    },
    (err)=>{
    }
    );

    // get brands
    this.rest.getBrands(id).subscribe((data: {}) => {
      this.Brands = data['data'];
      // console.log(this.Brands);
    });
  }
  addproduct(product: NgForm) {
    if (product.invalid) {
      return;
    }
    const fd = new FormData();
    for (let index = 0; index < this.images.length; index++) {
      const image = this.images[index];
      fd.append('media[]', image);
    }
    let newProduct = {
      'title': product.value.title,
      'qty': product.value.qty,
      'reg_price': product.value.reg_price,
      'sale_price': product.value.sale_price,
      'description': product.value.description
    };
    // alert(product.value.brand_id);
    fd.set('category_id', product.value.sub);
    fd.set('reg_price', product.value.reg_price);
    fd.set('sale_price', product.value.sale_price);
    fd.set('brand_id', "1");
    fd.set('media', product.value.media);
    fd.set('qty', product.value.qty);
    fd.set('ad_id', "125");
    fd.set('iswholesale', this.wholeSale);
    fd.set('title', product.value.title);
    fd.set('description', product.value.description);
    fd.set('ispaided', "0");
    this.showProduct.push(newProduct);
    this.newProducts.push(fd);
    this.images = null

    console.table(this.newProducts)
    product.resetForm();
    $("#addproduct").modal('hide');

  }
  public math(aa: any, bb: any) {
    return ((aa - bb) / aa * 100).toFixed(0)
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {

      const files = event.target.files;
      this.images = files;
    }
  }

  onSelectLocation(event) {
    this.marker.lat = event.coords.lat;
    this.marker.lng = event.coords.lng;
  }
}
