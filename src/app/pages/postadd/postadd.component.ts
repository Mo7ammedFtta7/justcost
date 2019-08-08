import { Component, OnInit, Output, Input } from '@angular/core';
import { apis } from '../../_services/apis';
import { environment } from '../../../environments/environment';
import { RestService } from '../../_services/rest.service';
import { NgForm, FormGroup } from '@angular/forms';
import { Icategory, Isub } from '../../_models/category';
import { AuthService } from '../../auth.service';
//declare function subs(id):any ;
declare function success(msg):any;
declare function SetMap():any;
declare function getMarker():any;
declare function nav(type):any;

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
  brands:any[]
  citis:any[]
  create:NgForm
  category_id: number = 5;
  Icategory:Icategory[]
  Isub:Isub[]
  user:any
  phone:string
  
  constructor(public _authService: AuthService,private _api: apis,private _rea: RestService) { }
  ngOnInit() {
    nav("hide");
  //  SetMap();
 // this.create.value.phone="dsdsdfsdf"
    this._api.categoris().subscribe(res =>{this.Icategory = res['data']; this.cat=res['data'][0]['name'];this.onSelect(res['data'][0]['id']);
  
  
  
  
  },
    error => this.errorMsg = error);
    // this._rea.getCitis().subscribe(
    //       res => {
    //       this.citis=res.data
    //         console.log(res)
    //       },
    //       err => {
    //         console.log(err)
    //       }
    // )
    this.user= this._authService.getUser()
    this.phone=this.user.phone

   //SetMap();
  }

    ref(id)
    {
      this.create.value.category_id=5
      console.log(id);  // false
    }

 

    selectsub(id){
      this.category_id=id;
      this._rea.getBrands(id).subscribe(
        res => {
         this.brands=res.data
          console.log(res)
        },
        err => {
          console.log(err)
        }
      ) ;
      console.log(id);
    }
    onSelect(id) {
      const xx= this.Icategory.filter((item) => item.id == id);
     this.Isub= xx[0]['subs']
     

      // this.states = this.selectService.getStates().filter((item) => item.countryid == countryid);
    }

    createadd(create: NgForm) {

     create.value.category_id=9;
    // create.value.ispaided=0;
    // create.value.iswholesale=0;
    // create.value.keywordsId=1;
    create.value.customerId=this.user.id;
     create.value.lat= 1;
     create.value.lng=1;
    // var mar=getMarker();

    //  if (typeof mar !== "undefined") {
    //   create.value.lat= mar.position.lat();
    //   create.value.lng=mar.position.lng()
    //  };
    
 
     console.log(create.value);

       this.postadd(create)
      }
   
      postadd (ad) {
        this._rea.createadd(ad.value)
        .subscribe(
          res => {
            success("Product Add succsefuly!")
            console.log(res)
          },
          err => {
            console.log(err)
          }
        ) 
      }
}
