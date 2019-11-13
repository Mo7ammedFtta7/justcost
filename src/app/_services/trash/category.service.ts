import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ObserveOnMessage } from 'rxjs/internal/operators/observeOn';
import { Observable } from 'rxjs';
import { Icategory } from '../../_models/category';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs-compat/operator/map';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  constructor(private _http: HttpClient) { }

  // getcates():Observable<any[]>
  // {
  //   return this._http.get( environment.ApiUrl+'nest').map((res:Response) => <any>res.json());
  // }
}
