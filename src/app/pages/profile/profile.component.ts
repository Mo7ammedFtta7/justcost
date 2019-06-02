import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { NgForm } from '@angular/forms';
import { RestService } from '../../_services/rest.service';
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
  getprofile
  constructor(private _rest: RestService) { }

  ngOnInit() { 

   this._rest.getProfile().subscribe((data: {}) => {
      this.getprofile  = data;
      console.log(data);
      this.username=data['username']
      this.email=data['email']
    });
  }

  editprofile(edit)
    {
      this._rest.setProfile(edit.value)
      .subscribe(
        res => {
          success("Data Update succesfuly");
          console.log(res)
        })
    }

    
}
