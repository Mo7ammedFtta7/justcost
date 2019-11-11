import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router'
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ApiService } from '../../_services/api.service';
declare function success(msg): any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username_faild = false;
  password_faild = false;
  pass_match = false;
  public FromWeb = 1
  // regForm = new FormGroup({
  //   username: new FormControl(''),
  //   password: new FormControl(''),
  // });


  registerUserData = {}
  constructor(private _auth: AuthService,private _router: Router, private _api: ApiService) { };

  ngOnInit() {

  }

  // registerUser() {
  //   this._auth.registerUser(this.registerUserData)
  //   .subscribe(
  //     res => {
  //       localStorage.setItem('token', res.token)
  //       this._router.navigate(['/special'])
  //     },
  //     err => console.log(err)
  //   )      
  // }
  regSubmit(f: NgForm) {


    if (!f.valid) {
      this.username_faild = true;
      this.password_faild = true;
      console.log(this.password_faild)
    } else {
      if (f.value.password != f.value.c_password) {
        this.pass_match = true;
        console.log(this.pass_match)

      }
      else {
        console.log("elese")

        f.value.city = 1;
        f.value.firebaseToken = 1;
        f.value.FromWeb = 1;

        //console.log(f);  // { first: '', last: '' }

        this.reqUser(f)

      }
    }
    ///console.log(f);  // false
  }

  // registerUser(user) {
  //   return this._api.post("customer/register",user)
  //   //return this.http.post<any>(this._registerUrl, user)
  // }

  reqUser(user) {
    console.log(user.value)

    // this._auth.registerUser(user.value)
    this._api.post("customer/register", user.value).subscribe(
      res => {
        success("registration successful please check your email for confirmation");
      },
      err => {
        if (err.status == 400) {
          user.reset();
          this.username_faild = true;
          this.password_faild = true;
          Swal.fire("Oops", "User already exist", "error")

        } else {
          //  this.password_faild=true;
          console.log(err)
        }
      }
    )
  }

}
