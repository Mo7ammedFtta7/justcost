import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RestService } from '../../_services/rest.service';
import { AuthService } from '../../auth.service';
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
  constructor(private _rest: RestService,private _auth: AuthService) { }

  ngOnInit() { 
    this.getprofile = this._auth.getUser().userInfo;
    console.log(this.getprofile);
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
