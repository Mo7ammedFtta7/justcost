import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';
import {Router} from '@angular/router';
import {ApiService} from '../../_services/api.service';
import {ToastrService} from 'ngx-toastr'
import {NgForm} from '@angular/forms';
declare function nav(type:any)
declare var $;
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  submitting = false;
  constructor( private toastr:ToastrService,private _auth: AuthService, private _router: Router, public apis: ApiService) { }

  ngOnInit() {
    $("#mainmodel").modal('hide');
    nav("hide");
  }
  onSubmit(f:NgForm){
    if (f.valid) {
let payload:any;
payload= f.form.value;
payload['FromWeb'] =1 ;
this.submitting = true;
this.apis.post("password_resets",payload).subscribe(
  next => {
  // console.log(next);
  this.submitting = false;
  f.resetForm();
  this.toastr.success("resest password has sent to your email");
},
  err => {
  this.submitting = false;
  if (err.status === 404 ) {
    this.toastr.error('email not found');
  }
  });
    }
  }

}
