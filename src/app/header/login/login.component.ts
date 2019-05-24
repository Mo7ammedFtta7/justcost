import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { UserLogin } from '../../_models/user-login';
import { Alert } from 'selenium-webdriver';
import swal from 'sweetalert2';




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
    console.log(f.valid);  // false
  }

  loginUser (user) {
    this._auth.loginUser(user.value)
    .subscribe(
      res => {
        console.log(res.statusText)
        
        
        // if (res.status==401) {
        //   alert(res.statusText);
        // }
        // localStorage.setItem('token', res.token)
        // this._router.navigate(['/home'])
      },
      err => {
        if (err.status==401) {
          user.reset();
          this.username_faild=true;
          this.password_faild=true;
          //alert(err.statusText);
        } else {
        //  this.password_faild=true;
          console.log(err)
        }
      }
    ) 
  }

}
