import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { EncryptService } from './encrypt.service';
import { Observable, throwError, Subscription } from 'rxjs';
import { slider } from '../_models/slider';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { TranslateService } from '../pipe/translate.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  storageKey = 'token';
  protected secretKey = '123456$#@$^@1ERF5555';
  public errorMsg;

  url = environment.ApiUrl + 'sliders';
  public subscriptions: Subscription[] = [];


  constructor(private trans: TranslateService,private http: HttpClient,private router: Router, public _authService: AuthService, private crypt: EncryptService) { }


  httpOptions(): any {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Content-Type', 'multipart/form-data');
    headers = headers.append('Lang', this.trans.getlocalLang());
    if (this._authService.loggedIn()) {
      headers = headers.append('Authorization', `Bearer  ${this._authService.user().token}`);
    }
    return { headers };
  }


  public GetFromApi(url) {
    return this.http.get(url, this.httpOptions()).catch(this.errorHandler);
  }


  public sub(key:string,func:Subscription){
    this.subscriptions[key]=func;
  }

  public unsub(func:string[]){
    func.forEach(element => {

     this.subscriptions[element].unsubscribe()
    });
  }

  slider(): Observable<slider[]> {
    return this.http.get<slider[]>(this.url)
      .catch(this.errorHandler);
  }

  items(): Observable<any[]> {
    return this.http.get<any[]>(environment.ApiUrl + 'products')
      .catch(this.errorHandler);
  }

  categoris() {
    return this.GetFromApi(environment.ApiUrl + 'nest')
  }

  GetApi(url) {
    let any: any;
    let errorMsg;
    this.GetFromApi(environment.ApiUrl + url).subscribe(res => { any = res['data'] },
    error => errorMsg = error)
    return any
  }



  likeProduct(id: any) {
    return this.http.post<any>(environment.ApiUrl + 'like/addlike', {id:id}, this.httpOptions())
      .catch(this.errorHandler);
  }
  dislikeProduct(id: any) {
    return this.http.post<any>(environment.ApiUrl + 'like/dislike', {id:id}, this.httpOptions())
      .catch(this.errorHandler);
  }


  like(id: any) {
     this.likeProduct(id).subscribe((data: {}) => {
     },
     err => {
     });

  }
  deslike(id: any) {
    this.dislikeProduct(id).subscribe((data: {}) => {
    },
    err => {
    });
  }

  handleError(handleError: any): Observable<any> {
    throw new Error("Method not implemented.");
  }
  handleData(handleData: any) {
    throw new Error("Method not implemented.");
  }

  get(url: string): Observable<any> {
    return this.http.get<any>(environment.ApiUrl + url, this.httpOptions()).pipe(catchError(this.errorHandler));
  }
  post(url: string, data: any, header = this.httpOptions()): Observable<any> {
    return this.http.post<any>(environment.ApiUrl + url, data, header).pipe(catchError(this.errorHandler));
  }
  delete(url: string): Observable<any> {
    return this.http.delete(environment.ApiUrl + url, this.httpOptions()).pipe(catchError(this.errorHandler));
  }
  toggleLike(id) {
    if (this._authService.user().userInfo.likedProducts.includes(id)) {
      return this.http.post(environment.ApiUrl + 'like/deslike', {id: id}, this.httpOptions())
      // @ts-ignore
        .pipe(catchError(this.errorHandler)).subscribe(next => this.updateUserDataAfterLikeProduct(next.data.product_id));
    }
    return  this.likeProduct(id).subscribe(next => {
      // @ts-ignore
      this.updateUserDataAfterLikeProduct(next.data.product_id);
    });
  }
  updateUserDataAfterLikeProduct(id) {
    const likes =  this._authService.user().userInfo.likedProducts;
    likes.push(id);
    const up = {
      token: this._authService.user().token,
      userInfo: {
        city: this._authService.user().userInfo.city,
        country: this._authService.user().userInfo.country,
        email: this._authService.user().userInfo.email,
        email_verified_at: this._authService.user().userInfo.email_verified_at,
        firebaseToken: this._authService.user().userInfo.firebaseToken,
        gender: this._authService.user().userInfo.gender,
        id: this._authService.user().userInfo.id,
        image: this._authService.user().userInfo.image,
        isVerified: this._authService.user().userInfo.isVerified,
        likedProducts: likes,
        mobile: this._authService.user().userInfo.mobile,
        name: this._authService.user().userInfo.name,
        username: this._authService.user().userInfo.username,
        verificationCode: this._authService.user().userInfo.verificationCode,
      }
    };
    return this._authService.setToken(up);
  }
  errorHandler(error: HttpErrorResponse) {
    if (error.status === 422) {
      Object.keys(error.error.errors).forEach(key => {

      });
    }
    if (error.status === 401) {

        this.router.navigate(['/login']);
    }
  
    return throwError(error);
  }
}
