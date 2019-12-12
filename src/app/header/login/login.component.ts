import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../auth.service';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserLogin } from '../../_models/user-login';
import { Alert } from 'selenium-webdriver';
import Swal from 'sweetalert2';
import { ApiService } from '../../_services/api.service';

declare function success(msg): any;
declare function nav(msg): any;



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(private _auth: AuthService, private _router: Router, public apis: ApiService) { }
  lodaed = false;
  ngOnInit() {
    nav("hide");
  }

  onSubmit(f: NgForm) {
    if (f.valid) {
      this.loginUser(f);
    }
  }

  loginUser(user:NgForm) {
    this.lodaed= true;
   var sub= this.apis.post("customer/login", user.value).subscribe(
        res => {
          this.lodaed= false;
          if (res.success != true) {
            Swal.fire("Oops", " sorry we don't recognize this email", "error")
          } else {
            if (res.data.userInfo.isVerified != true) {
              Swal.fire("Oops", "you have to confirm your account before continuing check your email", "error")
            } else {
              user.resetForm();
              this._auth.setToken(res.data);
              success("Welcome :)");
              user.resetForm();
            }
          }
        },
        err => {
          this.lodaed= false;
          if (err.status == 401) {
            user.resetForm();
            Swal.fire("Oops", "Please Write a valid username and password", "error")
          } else {
            console.log(err)
          }
        }
      );

      this.apis.sub("loginUser",sub)
  }

  ngOnDestroy() {
    this.apis.unsub(["loginUser"])
  }

}
