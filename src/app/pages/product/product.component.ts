import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../../_services/rest.service';
import { NgxSlideshowAcracodeModel } from 'ngx-slideshow-acracode';
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
  // formRating;
  page: any = 1;
  limit: any = 100;
  p: number = 1;
  formRating;
  commentForm: NgForm
  public comment: string
  public commments: any; 
  public product: any;
  public attributes: any;
  like: boolean = false
  imagesUrl = [
];
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
  setRate(rate){
    if(this.product){
    this._api.post('ratings',{rate:rate,product:this.product.productId}).subscribe((next)=>{
    },
    (error=>{
      console.log(error);
    }));
  };
}
  onLike(type) {
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
      let imgUrl:[] = data['data'][0].media;
      imgUrl.forEach((r)=>{
        this.imagesUrl.push(new NgxSlideshowAcracodeModel(r['url']));
      })
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
        }

      )
  }
}
