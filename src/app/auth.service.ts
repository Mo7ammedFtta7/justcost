import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { environment } from './../environments/environment';


@Injectable()
export class AuthService {

  private _registerUrl =environment.ApiUrl+"customer/register";
  private _loginUrl = environment.ApiUrl+"customer/login";
  
  constructor(private http: HttpClient,
              private _router: Router) { }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
  }

  logoutUser() {
    localStorage.removeItem('token')
    localStorage.removeItem('data')
    this._router.navigate(['/home'])
   // window.location.reload()

  }

  getToken() {
    return localStorage.getItem('token')
  }

  getUserName() {
    //let user=JSON.parse(localStorage.getItem('data'))
    let user=localStorage.getItem('data')
    let xx=JSON.parse(user)
    return xx.userInfo.username
  }
  getUser() {
    let user=localStorage.getItem('data')
    let xx=JSON.parse(user)
    return xx!=null ?xx.userInfo :null
  }

  getUserCountry() {
    
   let xx=this.getUser()
 
    return xx!=null ?xx.country.name :"UAE"

  }

  loggedIn() {
    return !!localStorage.getItem('token')    
  }


}
