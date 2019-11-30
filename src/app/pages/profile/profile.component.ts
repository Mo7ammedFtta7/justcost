import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder,FormGroup  } from '@angular/forms';
import {ToastrService} from 'ngx-toastr'
import { RestService } from '../../_services/rest.service';
import { AuthService } from '../../auth.service';
import { ApiService} from '../../_services/api.service';
import * as _ from 'lodash';
import {Axios} from '../../_services/axios';
import { CompressImage } from '../../_services/image';
import { Ng2ImgMaxService } from 'ng2-img-max';
declare function nav(type): any;
declare function success(msg):any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  edit:NgForm
  MaxSize = false
  imageLoaded = false;
  cities;
  loaded = true;
  p: number = 1;
  getprofile;
  editResponse = false;
  myAds;
  totalMyAds;
  totalActive;
  totalPaid;
  LikedProducts
  uploadForm: FormGroup;
  constructor(private ng2ImgMax: Ng2ImgMaxService, private toastr:ToastrService, private axios: Axios,private _rest: RestService,private _auth: AuthService,public api:ApiService,private formBuilder: FormBuilder) { }
  ngOnInit() {
    // this.toastr.success('hi','suhail');
    nav('hide');
    this.getprofile = this._auth.getUser().userInfo;
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
    this.api.get('myads').subscribe((next)=>{
      this.myAds = next.data;
      console.log(this.myAds);
      this.loaded = false;
      this.totalMyAds = this.myAds.length;
      this.totalActive =_.filter(this.myAds,['status.id',3]).length;
      this.totalPaid =_.filter(this.myAds,['ispaided',"1"]).length;
    });
    this.api.get('like/likedProducts').subscribe((next)=>{this.LikedProducts = next.data;});
    this.api.get('cities').subscribe((next)=>{this.cities = next.data;});
  }
  // compress(image) {
  //   this.ng2ImgMax.compressImage(image,0.040).subscribe(
  //     result => {
  //       let image = new File([result], result.name);
  //       return image;
  //     },
  //     error => {
  //       console.log('😢 Oh no!', error);
  //     }
  //   );
  // }
   onImgSubmit() {
    const fd = new FormData();
    let oldImage = this.uploadForm.get('profile').value;
    console.log(oldImage.size);
    if (oldImage.size > 40000) {
      this.MaxSize = true;
      return;
    } else{
      this.MaxSize = false;
    }
    this.imageLoaded = true;
    this.ng2ImgMax.compressImage(oldImage,0.040).subscribe(
      result => {
        let newIimage = new File([result], result.name);
        console.log(newIimage);
        fd.append('image',newIimage);
        this.axios.post('customer/uploadImage', fd).then(r => {
          this.imageLoaded = false;
          this.toastr.success('Image Uploaded Succesfull');
          console.log(r.data.data.userInfo.image);
           this._auth.setUserImg(r.data.data.userInfo.image)
          }
          );
      },
      error => {
        console.log('😢 Oh no!', error);
      }
    );
  }
  onImgSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('profile').setValue(file);
      if (file.size > 40000) {
        this.MaxSize = true;
      } else{
        this.MaxSize = false;
      }

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
        this.api.post('customer/setProfile',payload).subscribe((next)=>{
          edit.resetForm;
          this.editResponse = false;
          this.toastr.success('success','data update successfulley');
          let localStorag = {token:this._auth.user().token,userInfo:next.data.userInfo};
          let parm = localStorag;
          this._auth.setToken(parm);
        },
        (error)=>{
          this.toastr.error('Error','There is Some error We try to fix it');
        });
      }
    }


}
