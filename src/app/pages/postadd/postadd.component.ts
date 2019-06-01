import { Component, OnInit } from '@angular/core';
import { apis } from '../../_services/apis';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-postadd',
  templateUrl: './postadd.component.html',
  styleUrls: ['./postadd.component.css']
})
export class PostaddComponent implements OnInit {
  categoriesurl = environment.ApiUrl+'nest';
  errorMsg: any;
  categories:any[]

  constructor(private _api: apis) { }
  ngOnInit() {

    
    this._api.categoris(this.categoriesurl).subscribe(res =>{this.categories = res['data']; console.log(res['data'])},
    error => this.errorMsg = error);
  }

}
