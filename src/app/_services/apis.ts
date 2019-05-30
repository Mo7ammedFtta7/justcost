import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { environment } from '../../environments/environment';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { slider } from '../_models/slider';
import { AuthService } from '../auth.service';


@Injectable()
export class apis {
  
  
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
      'Authorization': 'bearer ' + this._authService.getToken()
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

  likeProduct(productId:number) {
    return this.http.post<any>(environment.ApiUrl+'likes',{'product_id':productId},this.httpOptions)
    .catch(this.errorHandler);
  }


  like(productId:number ) {
     this.likeProduct(productId).subscribe((data: {}) => {
       console.log( data['data'])
     });
   }

}

