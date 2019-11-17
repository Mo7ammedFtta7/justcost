import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../../_services/rest.service';
import { HttpParams } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { count } from 'rxjs/operators';
import { AuthService } from '../../auth.service';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../_services/api.service';
declare function goup(): any;
declare function success(msg): any;
declare function ViewMap(): any;
declare function nav(type): any;

//declare function owl2():any ;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  id: number;
  sub: any;
  page: any = 1;
  limit: any = 100;
  p: number = 1;
  commentForm: NgForm
  public comment: string
  public commments: any;
  public product: any;
  public attributes: any;
  like: boolean = false


  constructor(private _rea: RestService, private _api: ApiService, private route: ActivatedRoute, public _authService: AuthService) {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });


  }

  ngOnInit() {
    nav("small");
    //  ViewMap()
    goup()


    this.getProduct()
    this.getcomments()
    this.getAttributes(this.id);
  }

  onLike(type) {

    console.log(type);
    if (type) {
      this._api.deslike(this.id);
      success(':( !');
      this.like = false;
    } else {
      this._api.like(this.id);
      success('Ausome !');
      this.like = true;
    }


  }

  public math(aa: any, bb: any) {
    return ((aa - bb) / aa * 100).toFixed(0)
  }

  getProduct() {
    this._rea.getProduct(this.id).subscribe((data: {}) => {
      this.product = data['data'][0];
      this.like = data['data'][0]['likes']
    });
  }
  getcomments() {
    this._rea.getcomments(this.id).subscribe((data: {}) => {
      this.commments = data['data'];
    });
  }
  getAttributes(id: any) {
    this._rea.getAttributes(this.id).subscribe((data: {}) => {
      this.attributes = data['data'];
    });
  }
  addcomment(commentForm, pid) {
    commentForm.value.productid = pid;
    this._rea.addcomment(commentForm.value)
      .subscribe(
        res => {
          commentForm.reset();
          success("comment Add succsefuly!")
          this.getcomments()
        },
        err => {
          console.log(err)
        }

      )
  }
}
