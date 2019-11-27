import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { RestService } from '../../_services/rest.service';
import { NgxSlideshowAcracodeModel } from 'ngx-slideshow-acracode';
import { AuthService } from '../../auth.service';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../_services/api.service';
import * as _ from 'lodash';
declare function goup(): any;
declare function success(msg): any;
declare function ViewMap(): any;
declare function nav(type): any;
declare var $;
//declare function owl2():any ;
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  _ = _ ;
  isLike:boolean
  id: number;
  sub: any;
  simillarProduct:any;
  loaded = true;
  postLoaded = false;
  // formRating;
  liked:boolean;
  page: any = 1;
  limit: any = 100;
  p: number = 1;
  formRating;
  arr = [];
  commentForm: NgForm
  public comment: string
  public commments: any; 
  public product: any;
  public attributes: any;
  like: boolean = false;
  imagesUrl = [
];
  constructor(private router : Router,private _rea: RestService, private _api: ApiService, private route: ActivatedRoute, public _authService: AuthService) {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      
    });


  }
  
  ngOnInit() {
     this.arr = this._authService.user().userInfo['likedProducts'];
    if (_.includes(this.arr,this.id)) {
      this.isLike = true;
      this.liked = true;
      this.like = true;
    }else{
      this.liked = false;
      this.like = false;
    }
    nav("small");
    //  ViewMap()
    goup()


    this.getProduct()
    this.getcomments()
    this.getAttributes(this.id);
    this._api.get('similarProducts/'+this.id).subscribe(
      (next)=> { 
        this.simillarProduct = next.data;
        console.log(this.simillarProduct);
      },
      (error)=>{
        console.log(error);
      }
      );
  }
  goToSim(id) {
        window.open("/product/"+id, "_blank");
}
//   goToSim(id){
// this.router.navigate(["/product/",id]);
//   }
  getModalLogin(rate){
    if (rate) {
      $('#mainmodel').modal('show');
    }
    
  }
  setRate(rate){
    if(this.product && rate){
    this._api.post('ratings',{rate:rate,product:this.product.productId}).subscribe((next)=>{
    },
    (error=>{
    }));
  };
}
  onLike(like) {
    if (like) {
      this.liked = false;
      this._api.deslike(this.id);
      this._authService.setDisLike(this.id);
      this.isLike = false;
    } else {
      this.liked = true;
      this._api.like(this.id);
      this._authService.setLike(this.id);
      this.isLike = true;
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
      this.loaded = false;
    });
  }
  getcomments() {
    this._rea.getcomments(this.id).subscribe((data: {}) => {
      this.commments = data['data'];
      this.commments = this._.reverse(this.commments);
    });
  }
  getAttributes(id: any) {
    this._rea.getAttributes(this.id).subscribe((data: {}) => {
      this.attributes = data['data'];
    });
  }
  addcomment(commentForm, pid) {
    this.postLoaded = true;
    commentForm.value.productid = pid;
    this._rea.addcomment(commentForm.value)
      .subscribe(
        res => {
          commentForm.reset();
          this.postLoaded = false;
          console.log(res);
          this.getcomments()
        },
        err => {
        }

      )
  }
}
