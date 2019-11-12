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

  private _eventsUrl = "http://localhost:3000/api/events";
  private _specialEventsUrl = "http://localhost:3000/api/special";
  url = environment.ApiUrl + 'sliders';
  categoriesurl = environment.ApiUrl + 'nest';
  public subscriptions: Subscription[] = [];


  public GetFromApi(url) {
    return this.http.get(url, this.httpOptions()).catch(this.errorHandler);
  }


  public sub(key:string,func:Subscription){
    console.log(`sub : ${key}`)
    this.subscriptions[key]=func;
  }

  public unsub(func:string[]){
    func.forEach(element => {
      console.log(`unsub : ${element}`)
     this.subscriptions[element].unsubscribe()
    });
  }

  constructor(private trans: TranslateService,private http: HttpClient,private router: Router, public _authService: AuthService, private crypt: EncryptService) { }

  // public httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/json',
  //     'Authorization': 'Bearerx ' + localStorage.getItem('token')
  //   })
  // };
  setToken(data: string) {
    localStorage.setItem(this.storageKey, this.crypt.encrypt(this.secretKey, JSON.stringify(data)));
  }

  getToken() {
    return localStorage.getItem(this.storageKey);
  }

  // isLoggedIn(): boolean {
  //   return this.getToken() !== null;
  // }
  isVerified(): boolean {
      return  this.user().userInfo.isVerified;
  }
  user() {
    return JSON.parse(this.crypt.decrypt(this.secretKey, this.getToken()));
  }


  getEvents() {
    return this.http.get<any>(this._eventsUrl)
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
    return this.GetFromApi(this.categoriesurl)
  }

  GetApi(url) {
    let any: any;
    let errorMsg;
    console.log('------------------------');
    this.GetFromApi(environment.ApiUrl + url).subscribe(res => { any = res['data'] },
      error => errorMsg = error)

    return any
  }

  getSpecialEvents() {
    return this.http.get<any>(this._specialEventsUrl)
  }

  likeProduct(productId: any) {
    const body = new FormData();
    body.append('product_id', productId);
    console.log(body);
    return this.http.post<any>(environment.ApiUrl + 'like/addlike', body, this.httpOptions())
      .catch(this.errorHandler);
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }
  like(productId: any) {
     this.likeProduct(productId).subscribe((data: {}) => {
       console.log( data['data'])
     },
     err => {
      console.log(err)
     });

  //  this.xx()
  }
  deslike(productId: any) {
    //  this.likeProduct(productId).subscribe((data: {}) => {
    //    console.log( data['data'])
    //  },
    //  err => {
    //   console.log(err)
    //  });

   // this.xx()
  }




  // public xx() {
  //   this.post('likes').subscribe(res => { console.log(res) },
  //     error => console.log(error));
  //   //console.log(localStorage.getItem('token'));
  // }

  handleError(handleError: any): Observable<any> {
    throw new Error("Method not implemented.");
  }
  handleData(handleData: any) {
    throw new Error("Method not implemented.");
  }


  //=============== main apis ======================

  // ==== get api
  // public get(url: string): Observable<any> {
  //   return this.http.get(environment.ApiUrl + url)
  //     .pipe(map(this.extractData));
  // }

   // ==== get api
  //  public post(url: string,data: any): Observable<any> {
  //   return this.http.post(environment.ApiUrl + url, JSON.stringify(data), this.httpOptions)
  // }
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

  get(url: string): Observable<any> {
    return this.http.get<any>(environment.ApiUrl + url, this.httpOptions()).pipe(catchError(this.errorHandler));
  }
  post(url: string, data: any, header = this.httpOptions()): Observable<any> {
    return this.http.post<any>(environment.ApiUrl + url, data, header).pipe(catchError(this.errorHandler));
  }
  delete(url: string): Observable<any> {
    return this.http.delete(environment.ApiUrl + url, this.httpOptions()).pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {

    if (error.status === 422) {
      Object.keys(error.error.errors).forEach(key => {
        console.log(error.error.errors[key][0])
      });
    }
    if (error.status === 401) {
        console.log(error.status)
        this.router.navigate(['/login']);
    }
    return throwError(error);
  }
}
