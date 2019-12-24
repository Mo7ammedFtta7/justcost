import { NgForm } from '@angular/forms';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router, } from '@angular/router';
import { ApiService } from '../../_services/api.service';
import { ToastrService } from 'ngx-toastr';
declare var $:any;
@Component({
  selector: 'app-rest-pass',
  templateUrl: './rest-pass.component.html',
  styleUrls: ['./rest-pass.component.css']
})
export class RestPassComponent implements OnInit {
token: any;
load = false;
submitting = false;
check:boolean;
  constructor( private router: Router,private route: ActivatedRoute,private api: ApiService,private toastr:ToastrService) {

  }
  resetPassword(f:NgForm) {
    if (f.invalid || f.value.password !== f.value.c_password) { // ** check data of form is valid
      return;
    }
    this.submitting = true;
    let payload = {
      password: f.value.password,
      token :this.token,
      FromWeb : true
    }
    this.api.post('resets',payload).subscribe(
      next => {
        this.submitting = false;
        this.toastr.success('password updated successfulley')
        if (next.success) {
          $('#mainmodel').modal('show');
          setTimeout(() => {
            this.router.navigate(['/home/']);
          }, 3000);
        }
      },
      error => {
        this.submitting = false;
      }
    );
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.token = params['token'];
      if (this.token) {
        this.api.post('password_resets_cheack',{ token: this.token }).subscribe(  // ** check Token is Valid
          next => {
            if (next.success) {
              this.load = true;
              this.check = true;
            }
          },
          error => {
            if (error.status == 401) {
              if (!error.error.success) {
                this.load = true;
                this.check = false;
              }
            }

          }
        );
      }
    });
  }

}
