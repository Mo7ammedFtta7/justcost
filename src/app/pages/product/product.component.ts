import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../../_services/rest.service';
import { NgxSlideshowAcracodeModel } from 'ngx-slideshow-acracode';
import { AuthService } from '../../auth.service';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../_services/api.service';
import * as _ from 'lodash';
import {Report} from '../../_models/category';
import {Subscription} from 'rxjs';
import {ToastrService} from 'ngx-toastr';
import { TranslateService } from '../../pipe/translate.service';
declare function goup(): any;
declare function success(msg): any;
declare function ViewMap(): any;
declare function nav(type): any;
declare var $;
// declare function owl2():any ;
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {
  _ = _ ;
  isLike: boolean;
  id: number;
  sub: any;
  simillarProduct: any;
  loaded = true;
  postLoaded = false;
  // formRating;
  liked: boolean;
  page: any = 1;
  limit: any = 100;
  p = 1;
  formRating;
  arr = [];
  commentForm: NgForm;
  public comment: string;
  public commments: any;
  public product: any;
  public attributes: any;
  like = false;
  imagesUrl = [
];
  commentForReply: any;
  replyComment: string;
  replySaving = false;
  reportText: string;
  report: Report = new Report();
  reasons: any;
  reportSending = false;
  subscription: Subscription[] = [];
  constructor(private router: Router, private _rea: RestService,
              private _api: ApiService, private route: ActivatedRoute,
              public toastr: ToastrService,
              public _authService: AuthService,
              public translate: TranslateService) {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });


  }

  ngOnInit() {
    this.getReasons();
     if (this._authService.loggedIn()) {
      this.arr = this._authService.user().userInfo['likedProducts'];
     }
    if (_.includes(this.arr, this.id)) {
      this.isLike = true;
      this.liked = true;
      this.like = true;
    } else {
      this.liked = false;
      this.like = false;
    }
    nav('small');
    //  ViewMap()
    goup();


    this.getProduct();
    this.getcomments();
    this.getAttributes(this.id);
    this._api.get('similarProducts/' + this.id).subscribe(
      (next) => {
        this.simillarProduct = next.data;
      },
      (error) => {
        console.log(error);
      }
      );
  }
  goToSim(id) {
        window.open('/product/' + id, '_blank');
}
//   goToSim(id){
// this.router.navigate(["/product/",id]);
//   }
  getModalLogin(rate) {
    if (rate) {
      $('#mainmodel').modal('show');
    }

  }
  setRate(rate) {
    if (this.product && rate) {
    this._api.post('ratings', {rate: rate, product: this.product.productId}).subscribe((next) => {
    },
    (error => {
    }));
  }
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
    return ((aa - bb) / aa * 100).toFixed(0);
  }

  getProduct() {
    this._rea.getProduct(this.id).subscribe( next => {
      this.product = next.data;
      console.log(this.product);
      this.like = this.product.likes
      let imgUrl = [];
      imgUrl = this.product.media;
      if (imgUrl.length > 0) {
        imgUrl.forEach((r)=> {
          this.imagesUrl.push(new NgxSlideshowAcracodeModel(r['url']));
        });
      } else {
        this.imagesUrl.push(new NgxSlideshowAcracodeModel('assets/images/no-image.png'));
      }

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
          this.getcomments();
        },
        err => {
        }
      );
  }
  addReply(comment: number) {
    this.commentForReply = comment;
  }

  saveReply() {
    const  notify = {
      notification:
        {
          title: '1',
          body: 'one'
        },
      to: 'eC5iR4panTPT4c0eyX33R-:APA91bECwvT5LyhfiSOlPsmfHzptNGQPVxKXS5XR2EK9UiPmd0fiKKAsZlMBGYc4u7hurOAEHIoZUGWKLF4El0ZY6iD78wGeMzuKLAuyB-FMcI7-wgIbm11mbgVOaeFz1w4nSqga2kcA'

    };
    this.replySaving = true;
    const payload = {parent_id: this.commentForReply.commentId, productid: this.product.productId, comment: this.replyComment};
    this._rea.addcomment(payload).subscribe(next => {
      this.replySaving = false;
      $('#addReply').modal('hide');
      this._api.fire( notify).subscribe(console.log, console.warn);
      const   reply = {customerName: this._authService.user().userInfo.name, postedOn: Date.now(),  comment: this.replyComment };
      this.commentForReply.replyes.push(reply);
    });
  }

  getReasons() {
    const reasonSub = this._api.get('reports/reasons').subscribe(reason => this.reasons = reason.data);
    this.subscription.push(reasonSub);
  }

  async saveReport() {
    this.reportSending = true;
    this.report.controller_id = 1;
    this.report.object_id = this.product.productId;
    this.report.tbl_account_reporter_id = this._authService.user().userInfo.id;
    this.report.tbl_account_id = this.product.customerId;
   const addReportSub = await this._api.post('reports', this.report).subscribe(
      next => { this.toastr.success('تم ارسال البلاغ بنجاح ');  this.reportSending = false; },
      error => { this.toastr.error(error.error.message); this.reportSending = false; }
    );

    $('#addReport').modal('hide');
    this.subscription.push(addReportSub);

  }
  ngOnDestroy(): void {
    this.subscription.forEach(subscribe => subscribe.unsubscribe() );
  }
}
