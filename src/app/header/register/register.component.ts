import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router'
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ApiService } from '../../_services/api.service';
// import {type} from 'os';
declare function success(msg): any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  lodaed = false;
  pass_match = false;
  public FromWeb = 1
  registerUserData = {}
  constructor(private _auth: AuthService, private _router: Router, private _api: ApiService) { };

  ngOnInit() {

  }

  regSubmit(f: NgForm) {
    if (f.valid) {
      f.value.city = 1;
      f.value.firebaseToken = 1;
      f.value.FromWeb = 1;
      this.reqUser(f);
    }

  }

  reqUser(user:NgForm) {
    this.lodaed = true;
    console.log(user.value)
    this._api.post("customer/register", user.value).subscribe(
      res => {
        this.lodaed = false;
        user.resetForm;
        success("registration successful please check your email for confirmation");
      },
      err => {
        this.lodaed = false;
        if (err.status === 422) {
          Object.keys(err.error.data).forEach(kye => {
            Swal.fire("Opps",err.error.data[kye][0],"error");
          });
        } else {
          // this.toaster.error(error.message);
        }
      }
    )
  }

}
