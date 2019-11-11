import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { environment } from './../environments/environment';
import { apis } from './_services/apis';
import { retry } from 'rxjs/operators';
import { EncryptService } from './_services/encrypt.service';


@Injectable()
export class AuthService {

  private _loginUrl = environment.ApiUrl+"customer/login";
  protected secretKey = 'sfsdfkjblsfgmb@asd^gsaj)s9hfds^f@3s4!';

  constructor(private http: HttpClient,private _router: Router,private crypt: EncryptService) { }

  // registerUser(user) {
  //   return this._api.post("customer/register",user)
  //   //return this.http.post<any>(this._registerUrl, user)
  // }
  
  logoutUser() {
    localStorage.removeItem(this.secretKey)
    localStorage.removeItem('data')
    this._router.navigate(['/home'])
   // window.location.reload()
  }

  getToken() {
    return localStorage.getItem(this.secretKey)
  }

  getUserName() {
    return this.user().userInfo.username
  }
  getUser() {
    return JSON.parse(this.crypt.decrypt(this.secretKey, this.getToken()));
  }
  
  setToken(data: string) {
    console.log(this.crypt.encrypt(this.secretKey, JSON.stringify(data)))
    localStorage.setItem(this.secretKey, this.crypt.encrypt(this.secretKey, JSON.stringify(data)));
  }

  getUserCountry() {
   let xx=this.getUser()
  return xx!=null ?xx.country.name :"UAE"
  }

  loggedIn(): boolean {
    return this.getToken() !== null;
  }

  user() {
    return JSON.parse(this.crypt.decrypt(this.secretKey, this.getToken().toString()));
  }

}
