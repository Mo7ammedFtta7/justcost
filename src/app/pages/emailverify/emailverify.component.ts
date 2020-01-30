import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { apis } from '../../_services/apis';
import { RestService } from '../../_services/rest.service';
declare function nav(type): any;
@Component({
  selector: 'app-emailverify',
  templateUrl: './emailverify.component.html',
  styleUrls: ['./emailverify.component.css']
})
export class EmailverifyComponent implements OnInit
  {
    id: number;
    loaded = false;
    check = false;
    public name:string
    public val:any
    constructor(public rest:RestService,private route: ActivatedRoute) { }

        ngOnInit()
            {
              nav("small");
              this.route.params.subscribe(params => {
              this.id = +params['token'] });
              this.getEmailValidation(this.id)
            }

        getEmailValidation(id:any )
            {
              this.rest.getEmailValidation(this.id)
              .subscribe(
                res => {
                  this.loaded = true;
                  if (res.success==true) {
                    this.check = true;
                    localStorage.setItem('token', res.data.token)
                    localStorage.setItem('data', JSON.stringify(res.data))
                  }

              // .subscribe(data => {
              //     this.val = data;
              //     if (this.val['success']==true)
              //     {
              //       this.name=this.val['data']['name']
              //       localStorage.setItem('token', this.val['token'])
              //       localStorage.setItem('data', this.val['data'])
              //       console.log(this.val['data']);
              //     }
              });
                }

  }
