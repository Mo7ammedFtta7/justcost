import { Component, OnInit, Output } from '@angular/core';
import { apis } from '../../_services/apis';
import { environment } from '../../../environments/environment';
import { RestService } from '../../_services/rest.service';
import { NgForm, FormGroup } from '@angular/forms';
declare function subs(id):any ;

@Component({
  selector: 'app-postadd',
  templateUrl: './postadd.component.html',
  styleUrls: ['./postadd.component.css']
})
export class PostaddComponent implements OnInit {
  categoriesurl = environment.ApiUrl+'nest';
  errorMsg: any;
  categories:any[]
  cat:any
  create:NgForm
  category_id=5
  constructor(private _api: apis,private _rea: RestService) { }
  ngOnInit() {
    this._api.categoris(this.categoriesurl).subscribe(res =>{this.categories = res['data']; this.cat=res['data'][0]['name'];subs(res['data'][0]['id'])},
    error => this.errorMsg = error);
  }
    ref(id)
    {
      this.create.value.category_id=5
     console.log(id);  // false
    }

    createadd(create: NgForm) {
       console.log(create.value);  // false
      }
   
      postadd (ad) {
        this._rea.postadd (ad.value)
        .subscribe(
          res => {

          },
          err => {

          }
        ) 
      }
}
