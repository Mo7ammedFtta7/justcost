import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder,FormGroup  } from '@angular/forms';
import {ToastrService} from 'ngx-toastr'
import { RestService } from '../../_services/rest.service';
import { AuthService } from '../../auth.service';
import { ApiService} from '../../_services/api.service';
import * as _ from 'lodash';
import {Axios} from '../../_services/axios';
declare function nav(type): any;
declare function success(msg):any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  edit:NgForm
  cities;
  getprofile;
  editResponse = false;
  myAds;
  totalMyAds;
  totalActive;
  totalPaid;
  LikedProducts
  uploadForm: FormGroup;
  constructor(private toastr:ToastrService, private axios: Axios,private _rest: RestService,private _auth: AuthService,public api:ApiService,private formBuilder: FormBuilder) { }
  ngOnInit() { 
    // this.toastr.success('hi','suhail');
    nav('hide');
    this.getprofile = this._auth.getUser().userInfo;
    console.log(this.getprofile);
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
    this.api.get('myads').subscribe((next)=>{  
      this.myAds = next.data; 
      this.totalMyAds = this.myAds.length; 
      this.totalActive =_.filter(this.myAds,['status.id',3]).length;
      this.totalPaid =_.filter(this.myAds,['ispaided',"1"]).length;
    });
    this.api.get('like/likedProducts').subscribe((next)=>{this.LikedProducts = next.data;});
    this.api.get('cities').subscribe((next)=>{this.cities = next.data;});
  }
   onImgSubmit() {
    const fd = new FormData();
    fd.append('image', this.uploadForm.get('profile').value);
     this.axios.post('customer/uploadImage', fd)
     .then(r => this._auth.setUserImg(r.data.data.userInfo.image));
  }
  onImgSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('profile').setValue(file);
    }
  }
getMyAds(){
}
openImg(){

}
  editprofile(edit:NgForm)
    {
      if (edit.valid) {
        this.editResponse = true;
        const payload = edit.value;
        console.log(edit.value);
        this.api.post('customer/setProfile',payload).subscribe((next)=>{
          edit.resetForm;
          this.editResponse = false;
          this.toastr.success('success','data update successfulley');
          console.log(next.data);
          let localStorag = {token:this._auth.user().token,userInfo:next.data.userInfo};
          console.log(localStorag);
          this._auth.setToken(localStorag);
        },
        (error)=>{
          this.toastr.error('Error','There is Some error We try to fix it');
        });
      }
    }

    
}
