import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
    export class RestService {
    private httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    
  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getProducts(params :HttpParams,id): Observable<any> {
   //console.log(params);
    return this.http.get(environment.ApiUrl + 'categoryproudects/'+id, {params }).pipe(
      map(this.extractData));
  }
  getProduct(id): Observable<any> {
     return this.http.get(environment.ApiUrl + 'products/'+id).pipe(
       map(this.extractData));
   }
   getcomments(id): Observable<any> {
    return this.http.get(environment.ApiUrl + 'productcomments/'+id).pipe(
      map(this.extractData));
  }

  getBrands(id): Observable<any> {
    return this.http.get(environment.ApiUrl + 'brandsogcategory/'+id).pipe(
      map(this.extractData));
  }
  getEmailValidation(id): Observable<any> {
    return this.http.get(environment.ApiUrl + 'customer/emailvalidation/'+id)
  }

}
