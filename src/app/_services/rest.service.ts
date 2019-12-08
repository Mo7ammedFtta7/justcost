import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { AuthService } from '../auth.service';
import { TranslateService } from '../pipe/translate.service';

@Injectable({
  providedIn: 'root'
})
    export class RestService {


      constructor(private http: HttpClient, private _authService: AuthService, private trans: TranslateService) { }

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







  private extractData(res: Response) {
    const body = res;
    return body || { };
  }
  errorHandler(error: HttpErrorResponse) {
    return Observable.throw( error.message || 'Server Error');
  }

  // items() : Observable<any[]>{
  //   return this.http.get<any[]>(environment.ApiUrl+'products')
  //                   .catch(this.errorHandler);
  // }
  items(params: HttpParams, id): Observable<any> {
    // console.log(params);
     return this.http.get(environment.ApiUrl + 'products/' + id, {params }).pipe(
       map(this.extractData));
   }
  getProducts(params: HttpParams, id): Observable<any> {
   // console.log(params);
    return this.http.get(environment.ApiUrl + 'categoryproudects/' + id, {headers: this.httpOptions().headers , params }).pipe(
      map(this.extractData));
  }
  getFavProducts(): Observable<any> {
    // console.log(params);
     return this.http.get(environment.ApiUrl + 'getAllProducts/').pipe(
       map(this.extractData));
   }

  getProduct(id): Observable<any> {
     return this.http.get(environment.ApiUrl + 'products/' + id).pipe(
       map(this.extractData));
   }

   search(params: HttpParams): Observable<any> {
    return this.http.get(environment.ApiUrl + 'search', {params}).pipe(
      map(this.extractData));
  }
   getProductss(params: HttpParams): Observable<any> {
    return this.http.get(environment.ApiUrl + 'getAllProducts', {params}).pipe(
      map(this.extractData));
  }
   getcomments(id): Observable<any> {
    return this.http.get(environment.ApiUrl + 'productcomments/' + id).pipe(
      map(this.extractData));
  }

  getBrands(id): Observable<any> {
    return this.http.get(environment.ApiUrl + 'brandsogcategory/' + id).pipe(
      map(this.extractData));
  }

  getAttru(id): Observable<any> {
    return this.http.get(environment.ApiUrl + 'products/catAttributes/' + id).pipe(
      map(this.extractData));
  }

  getAttributes(id): Observable<any> {
    return this.http.get(environment.ApiUrl + 'products/attributes/' + id).pipe(
      map(this.extractData));
  }

  getCitis(countryId): Observable<any> {
    return this.http.get(environment.ApiUrl + 'cities/' + countryId).pipe(
      map(this.extractData));
  }

  getCountries(): Observable<any> {
    return this.http.get(environment.ApiUrl + 'countries/').pipe(
    map(this.extractData));
  }


  getEmailValidation(id): Observable<any> {
    return this.http.get(environment.ApiUrl + 'customer/emailvalidation/' + id);
  }
  postadd(ad) {
    return this.http.post<any>(environment.ApiUrl + 'products', ad);
  }

  createadd(ad) {
    return this.http.post<any>(environment.ApiUrl + 'ads', ad,{headers: this.httpOptions().headers  });
  }

  addcomment(comment) {
    return this.http.post<any>(environment.ApiUrl + 'comments/addcomment', comment, this.httpOptions());
  }


  setProfile(form) {
    return this.http.post<any>(environment.ApiUrl + 'customer/setProfile', form , this.httpOptions())
    .catch(this.errorHandler);
  }

}
