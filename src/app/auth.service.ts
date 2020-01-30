import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { environment } from './../environments/environment';
import { EncryptService } from './_services/encrypt.service';


@Injectable()
export class AuthService {

  private _loginUrl = environment.ApiUrl+"customer/login";
  secretKey = 'sfsdfkjblsfgmb@asd^gsaj)s9hfds^f@3s4!';

  constructor(private http: HttpClient,private _router: Router,private crypt: EncryptService) { }

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
  arrayRemove(arr, value) {

    return arr.filter(function(ele){
        return ele != value;
    });

 }
setLike(id){
  let userInfo = this.user()['userInfo'];
  userInfo['likedProducts'].push(id)
  let payload = {};
  payload['token'] =  this.user().token;
  payload['userInfo'] = userInfo;
  this.setToken(payload);
}
setDisLike(id){
  let userInfo = this.user()['userInfo'];
  userInfo['likedProducts']=this.arrayRemove(userInfo['likedProducts'],id);
  let payload = {};
  payload['token'] =  this.user().token;
  payload['userInfo'] = userInfo;
  this.setToken(payload);
}
  getUserToken() {
    return this.user().token;
  }

  setToken(data) {
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
