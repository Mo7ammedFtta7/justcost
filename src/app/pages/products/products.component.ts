import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { apis } from '../../_services/apis';
import { RestService } from '../../_services/rest.service';
import { HttpParams } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { count } from 'rxjs/operators';

declare function goup():any ;


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  id: any;
  sub: any;
  page:any=1;
  limit:any=100;
  p: number = 1;
  public products: any;
  public Brands: any[];
  category='NaN'
  attributes:any[];
  // count= this.products.length

  constructor(public rest:RestService,private _api: apis,private route: ActivatedRoute) {}

  ngOnInit() {

    goup()
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; 
   });
   this.getAttributes(this.id);
  this.getProducts(this.page,'');
  this.getBrands(this.id);

  }
  public math(aa:any,bb:any) {
    return ((aa-bb) /aa * 100).toFixed(2)
  }
  getProducts( page:any,search:string ) {
    let params = new HttpParams().set("limit",this.limit).set("search",search); //Create new HttpParams
    this.rest.getProducts(params,this.id).subscribe((data: {}) => {
      this.products = data['data'];
      this.category= data['catName'];
    });
  }
  getBrands(id:any) {
    this.rest.getBrands(this.id).subscribe((data: {}) => {
      this.Brands = data['data'];
      console.log("--------------"+data);
    });
  }
  getAttributes(id:any) {
    this.rest.getAttru(this.id).subscribe((data: {}) => {
      this.attributes = data['data'];
      console.log("------getAttributes--------");
      console.log(data);

    });
  }


    onKey(value: string) {
      console.log(value);
      this.getProducts(this.page,value);

    }

}
