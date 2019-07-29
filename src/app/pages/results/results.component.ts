import { Component, OnInit } from '@angular/core';
import { RestService } from '../../_services/rest.service';
import { apis } from '../../_services/apis';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpParams } from '@angular/common/http';
declare function nav(type:any) 
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  products:any[];
  search:string;
  category:string;
  sub:any;
  public paramsa:any[] =new Array();

  constructor(public rest:RestService,private _api: apis,private route: ActivatedRoute) {}

  ngOnInit() {

    nav("small") ;
    this.route.queryParams.subscribe(param => {
     // this.paramss.set("categoty",params['categoty']);
     // for (const key in param) {
      //   this.paramss== new HttpParams()
    
   //this.paramsa=
    Object.keys(param).map(i => {
      
      this.paramsa[i]=param[i] 
    
    })
       //  console.log(key+" "+param[key]);
     // }
      console.log(this.paramsa);

      // //  params.forEach(element => {
      // //   this.paramss.set(element[''],this.search)
      // });
      //this.params=param ;

    this.getAttributes(this.paramsa);
   });

  }

  public math(aa:any,bb:any) {
    return ((aa-bb) /aa * 100).toFixed(2)
  }

  onKey(key)
  {
   this.search=key;
  this.paramsa["search"]=key;
 
  this.getAttributes(this.paramsa)
  }

  getAttributes(params) {
     let paramsa = new HttpParams()
    .set("search",this.paramsa["search"])
    .set("category",this.category)
    // //console.log(params);
    this.rest.getProductss(params).subscribe((data) => {
      this.products = data['data'];
    });
  }
}
