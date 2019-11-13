import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';
import {Router} from '@angular/router';
import {ApiService} from '../../_services/api.service';
import {NgForm} from '@angular/forms';
declare function nav(type:any)
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private _auth: AuthService, private _router: Router, public apis: ApiService) { }

  ngOnInit() {
    nav("hide");
  }
  onSubmit(f:NgForm){
    if (f.valid) {
alert('dd');
let payload = f.form.value;
this.apis.post("customer/reset/password/email",payload).subscribe(next => {
  console.log(next);
},
  error => {
  console.log(error);
  });
    }
  }

}
