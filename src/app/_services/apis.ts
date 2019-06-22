import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { environment } from '../../environments/environment';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { slider } from '../_models/slider';
import { AuthService } from '../auth.service';
import { map } from 'rxjs/operators';


@Injectable()
export class apis {
  
  public errorMsg;

  private _eventsUrl = "http://localhost:3000/api/events";
  private _specialEventsUrl = "http://localhost:3000/api/special";
    url = environment.ApiUrl+'sliders';
    categoriesurl = environment.ApiUrl+'nest';
   

    public  GetFromApi(url) { 
            return this.http.get(url).catch(this.errorHandler);  
    }
        

  constructor(private http: HttpClient,public _authService: AuthService) { }

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept':  'application/json',
      'Authorization': 'Bearerx ' + localStorage.getItem('token')
    })
  };
  

  getEvents() {
    return this.http.get<any>(this._eventsUrl)
  }
  slider() : Observable<slider[]>{
    return this.http.get<slider[]>(this.url)
                    .catch(this.errorHandler);
  }

  items() : Observable<any[]>{
    return this.http.get<any[]>(environment.ApiUrl+'products')
                    .catch(this.errorHandler);
  }

  categoris(categoriesurl){
  return this.GetFromApi(categoriesurl)
  }

  GetApi(url){
      let any:any;
      let errorMsg;
      console.log('------------------------');
    this.GetFromApi(environment.ApiUrl+url).subscribe(res =>{any = res['data']},
    error => errorMsg = error)

    return any
  }
  
  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }
  getSpecialEvents() {
    return this.http.get<any>(this._specialEventsUrl)
  }

  likeProduct(productId:any) {
    const body = new FormData();
    body.append('product_id',productId);
    console.log(body);
    return this.http.post<any>(environment.ApiUrl+'likes',body ,this.httpOptions)
    .catch(this.errorHandler);
  } 

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  like(productId:any) {
    //  this.likeProduct(productId).subscribe((data: {}) => {
    //    console.log( data['data'])
    //  },
    //  err => {
    //   console.log(err)
    //  });

    this.xx()
   }
   deslike(productId:any) {
    //  this.likeProduct(productId).subscribe((data: {}) => {
    //    console.log( data['data'])
    //  },
    //  err => {
    //   console.log(err)
    //  });

    this.xx()
   }
      public post(url:string): Observable<any> {
              console.log(this.httpOptions);
              return this.http.post(environment.ApiUrl+url, JSON.stringify({product_id: 7}), this.httpOptions )   
      }
      
      public get(url:string): Observable<any> {
        return this.http.get(environment.ApiUrl+url)
        .pipe(map(this.extractData));

      }

      public xx()
      {
        this.post('likes').subscribe(res =>{console.log(res)},
        error => console.log(error));
        //console.log(localStorage.getItem('token'));
      }

  handleError(handleError: any): Observable<any> {
    throw new Error("Method not implemented.");
  }
  handleData(handleData: any) {
    throw new Error("Method not implemented.");
  }

}

