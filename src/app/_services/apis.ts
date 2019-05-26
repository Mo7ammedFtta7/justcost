import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http'
import { environment } from '../../environments/environment';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { slider } from '../_models/slider';


@Injectable()
export class apis {

  private _eventsUrl = "http://localhost:3000/api/events";
  private _specialEventsUrl = "http://localhost:3000/api/special";
    url = environment.ApiUrl+'sliders';
    categoriesurl = environment.ApiUrl+'nest';
   

    public  GetFromApi(url) { 
            return this.http.get(url).catch(this.errorHandler);  
        }
        

  constructor(private http: HttpClient) { }

  

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
      let any:any[];
      let errorMsg;
    this.GetFromApi( environment.ApiUrl+url).subscribe(res =>{any = res['data']},
    error => errorMsg = error)
    return any
  }
  
  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }
  getSpecialEvents() {
    return this.http.get<any>(this._specialEventsUrl)
  }
}

