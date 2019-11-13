import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { apis } from '../../_services/apis';
import { RestService } from '../../_services/rest.service';
import { HttpParams } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { count } from 'rxjs/operators';
import { NgForm, FormGroup } from '@angular/forms';

declare function goup():any ;
declare function getSelectChecked():any ;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  searcF:string='dddd';
  id: any;
  sub: any;
  page:any=1;
  limit:any=100;
  p: number = 1;
  public products: any;
  public Brands: any[];
  category='NaN'
  attributes:any[];
  filterForm:FormGroup;
  masterSelected:boolean;
  checkedList:any;
  public checklist = [
    {id:1,value:'Elenor Anderson',isSelected:false},
    {id:2,value:'Caden Kunze',isSelected:false},
    {id:3,value:'Ms. Hortense Zulauf',isSelected:false},
    {id:4,value:'Grady Reichert',isSelected:false},
    {id:5,value:'Dejon Olson',isSelected:false},
    {id:6,value:'Jamir Pfannerstill',isSelected:false},
    {id:7,value:'Aracely Renner DVM',isSelected:false},
    {id:8,value:'Genoveva Luettgen',isSelected:false}
  ];

  // count= this.products.length

  constructor(public rest:RestService,private route: ActivatedRoute) {}

  ngOnInit() {
    this.masterSelected = false;
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
  getProducts(page:any,search:string) {
    let params = new HttpParams()
    .set("limit",this.limit)
    .set("search",search)
    .set("checked",getSelectChecked())
//console.log(params)
    this.rest.getProducts(params,this.id).subscribe((data: {}) => {
      this.products = data['data'];
      this.category= data['catName'];
    });
  }

  filter(filterForm:FormGroup){
  //  console.log(filterForm.value);
  }


  getBrands(id:any) {
    this.rest.getBrands(this.id).subscribe((data: {}) => {
      this.Brands = data['data'];
     // console.log("--------------"+data);
    });
  }
  getAttributes(id:any) {
    this.rest.getAttru(this.id).subscribe((data: {}) => {
      this.attributes = data['data'];
    });
  }

  checkUncheckAll() {
    for (var i = 0; i < this.checklist.length; i++) {
      this.checklist[i].isSelected = this.masterSelected;
    }
    this.getCheckedItemList();
  }

  getCheckedItemList(){
     this.checkedList = [];
    for (var i = 0; i < this.checklist.length; i++) {
      if(this.checklist[i].isSelected)
      this.checkedList.push(this.checklist[i]);
    }
     this.checkedList = JSON.stringify(this.checkedList);
    // console.log(this.checkedList)

  }
    onKey(value: string) {
      this.getProducts(this.page,value);
    }

    isAllSelected() {
      getSelectChecked()
      this.masterSelected = this.checklist.every(function(item:any) {
          return item.isSelected == true;
        })
      this.getCheckedItemList();
    }
  

}
