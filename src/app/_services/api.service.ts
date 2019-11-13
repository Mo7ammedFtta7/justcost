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
    console.log(`sub : ${key}`)
    this.subscriptions[key]=func;
  }

  public unsub(func:string[]){
    func.forEach(element => {
      console.log(`unsub : ${element}`)
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



  likeProduct(productId: any) {
    const body = new FormData();
    body.append('product_id', productId);
    return this.http.post<any>(environment.ApiUrl + 'likes', body, this.httpOptions())
      .catch(this.errorHandler);
  }

  
  like(productId: any) {

  }
  deslike(productId: any) {
 
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
