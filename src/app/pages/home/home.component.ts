import { Component, OnInit } from '@angular/core';
import { apis } from '../../_services/apis';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { slider } from '../../_models/slider';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { environment } from '../../../environments/environment';
import { Icategory } from '../../_models/category';
import { RestService } from '../../_services/rest.service';

//declare function owl():any ;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public sliders = [];
  public items = [];
  public  categories: Icategory[] ;
  categoriesurl = environment.ApiUrl+'nest';


  public errorMsg;
  constructor(private _api: apis,public rest:RestService) { }
  
  ngOnInit() {
 
     // owl();
      this.getitems();

        this._api.categoris(this.categoriesurl).subscribe(res =>{this.categories = res['data']; console.log(res['data'])},
          error => this.errorMsg = error);
      }

      getitems( ) {
        this.rest.getFavProducts().subscribe((data: {}) => {
          this.items = data['data'];
        });
      }

      public math(aa:any,bb:any) {
        return ((aa-bb) /aa * 100).toFixed(0)
      }
}
