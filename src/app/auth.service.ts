import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { environment } from './../environments/environment';
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
  setUserImg(imgUrl){
    var user =this.user()
    user.userInfo.image=imgUrl;
    this.setToken(user)
   }
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
    return this.user();
  }

  getUserToken() {
    return this.user().token;
  }
  
  setToken(data: string) {
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

  setUserImg(imgUrl){
   var user =this.user()
   user.userInfo.image=imgUrl;
   this.setToken(user)
  }





  likes() :any[] {
    return  this.user().likedProducts !==null?this.user().likedProducts:[];
  }

}
