import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { apis } from '../../_services/apis';
import { RestService } from '../../_services/rest.service';
import { HttpParams } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { count } from 'rxjs/operators';
import { AuthService } from '../../auth.service';
declare function goup():any ;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  id: any;
  sub: any;
  page:any=1;
  limit:any=100;
  p: number = 1;
  public commments: any;
  public product: any;
  constructor(public rest:RestService,private _api: apis,private route: ActivatedRoute,public _authService: AuthService) {}

  ngOnInit() 
    {
     goup()
        this.sub = this.route.params.subscribe(params => {
          this.id = +params['id']; 
      });
      this.getProduct(this.id)
      this.getcomments(this.id)

    }

    onLike() {
      this._api.like(this.id);  
      }

    public math(aa:any,bb:any) {
      return ((aa-bb) /aa * 100)
    }

    getProduct( id:any ) {
     // let params = new HttpParams().set("limit",this.limit); //Create new HttpParams
      this.rest.getProduct(this.id).subscribe((data: {}) => {
        this.product = data['data'][0];
        console.log( data['data'][0])
      });
    }
    getcomments( id:any ) {
      // let params = new HttpParams().set("limit",this.limit); //Create new HttpParams
       this.rest.getcomments(this.id).subscribe((data: {}) => {
         this.commments = data['data'];
         console.log( data['data'])
       });
     }
}
