import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { apis } from '../../_services/apis';
import { RestService } from '../../_services/rest.service';
import { HttpParams } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { count } from 'rxjs/operators';
import { AuthService } from '../../auth.service';
import { NgForm } from '@angular/forms';
declare function goup():any ;
declare function success(msg):any;
declare function  ViewMap():any;
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
  commentForm:NgForm
  public comment:string
  public commments: any;
  public product: any;
  constructor(private _rea: RestService,private _api: apis,private route: ActivatedRoute,public _authService: AuthService) {}

  ngOnInit() 
    {
      ViewMap()
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
      this._rea.getProduct(this.id).subscribe((data: {}) => {
        this.product = data['data'][0];
        console.log( data['data'][0])
      });
    }
    getcomments( id:any ) {
      // let params = new HttpParams().set("limit",this.limit); //Create new HttpParams
       this._rea.getcomments(this.id).subscribe((data: {}) => {
         this.commments = data['data'];
         console.log( data['data'])
       });
     }
     addcomment(commentForm,pid)
      {
        commentForm.value.productid=pid;
        console.log(commentForm.value)
        this._rea.addcomment(commentForm.value)
        .subscribe(
          res => {
           // commentForm.value.comment=555555555555555555
         commentForm.reset();
            success("comment Add succsefuly!")
            this.getcomments(pid ) 
          console.log(res)
          },
          err => {
            console.log(err)
          }
      
       )
      }
}
