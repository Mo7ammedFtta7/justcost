import { Component, OnInit } from '@angular/core';
import { RestService } from '../../_services/rest.service';
import { apis } from '../../_services/apis';
import { ActivatedRoute } from '@angular/router';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  products:any[];
  search:string;
  sub:any;


  constructor(public rest:RestService,private _api: apis,private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.search = params['search'];
      this.getAttributes();
      console.log(params);
   });

  }

  public math(aa:any,bb:any) {
    return ((aa-bb) /aa * 100).toFixed(2)
  }

  getAttributes() {
    let params = new HttpParams()
    .set("search",this.search)
    this.rest.getProductss(params).subscribe((data) => {
      this.products = data['data'];
    });
  }
}
