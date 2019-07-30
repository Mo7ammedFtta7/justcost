import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { UserLogin } from '../../_models/user-login';
import { Alert } from 'selenium-webdriver';
import Swal from 'sweetalert2';

declare function success(msg):any;
declare function nav(msg):any;



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password_faild=false;
  username_faild=false;

  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
    nav("hide");
  }
 
  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    if (!f.valid) {
      this.username_faild=true;
      this.password_faild=true;
    }else
    {
      this.loginUser(f)
    }
   // console.log(f.valid);  // false
  }

  loginUser (user) {
    this._auth.loginUser(user.value)
    .subscribe(
      res => {
        if (res.data.userInfo.isVerified!=true) {
          Swal.fire( "Oops" ,  "you have to confirm your account before continuing check your email" ,  "error" )

        } else {
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('data', JSON.stringify(res.data))
          success("Welcome :)");
        }

    

      },
      err => {
        if (err.status==401) {
          user.reset();
          this.username_faild=true;
          this.password_faild=true;
          Swal.fire( "Oops" ,  "Please Write a valid username and password" ,  "error" )
  
        } else {
        //  this.password_faild=true;
        //  console.log(err)
        }
      }
    ) 
  }

}
