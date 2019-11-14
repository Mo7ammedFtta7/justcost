import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder,FormGroup  } from '@angular/forms';
import { RestService } from '../../_services/rest.service';
import { AuthService } from '../../auth.service';
import { ApiService} from '../../_services/api.service';
import {environment} from '../../../environments/environment';
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
  username:string
  email:string
  getprofile;
  myAds;
  LikedProducts
  uploadForm: FormGroup;
  constructor( private axios: Axios,private _rest: RestService,private _auth: AuthService,public api:ApiService,private formBuilder: FormBuilder) { }
  ngOnInit() { 
    nav('hide');
    this.getprofile = this._auth.getUser().userInfo;
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
    this.api.get('myads').subscribe((next)=>{ this.myAds = next.data; console.log(next.data)});
    this.api.get('like/likedProducts').subscribe((next)=>{this.LikedProducts = next.data;console.log(next.data)});
  }
   onImgSubmit() {
    const fd = new FormData();
    fd.append('image', this.uploadForm.get('profile').value);
     this.axios.post('customer/uploadImage', fd)
     .then(r => console.log(r.data));
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
  editprofile(edit)
    {
      this._rest.setProfile(edit.value)
      .subscribe(
        _res => {
          success("Data Update succesfuly");
        })
    }

    
}
