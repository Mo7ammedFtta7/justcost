import { Component, OnInit } from '@angular/core';
import { RestService } from '../../_services/rest.service';
import { apis } from '../../_services/apis';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpParams } from '@angular/common/http';
declare function nav(type: any)
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  products: any[];
  search: string;
  category: string;
  sub: any;
  Brands: any[] = []
  public paramsa: any[] = new Array();

  constructor(public rest: RestService, private _api: apis, private route: ActivatedRoute) { }

  ngOnInit() {

    nav("small");
    this.route.queryParams.subscribe(param => {
      Object.keys(param).map(i => {
        this.paramsa[i] = param[i]
      })
      this.getAttributes(this.paramsa);
    });
  }

  public math(aa: any, bb: any) {
    return ((aa - bb) / aa * 100).toFixed(2)
  }

  public filter(filterForm) {}

  onKey(key) {
    this.search = key;
    this.paramsa["search"] = key;
    this.getAttributes(this.paramsa)
  }

  getAttributes(params) {
    params["limit"] = '100'
    this.rest.getProductss(params).subscribe((data) => {
      this.products = data['data'];
    });
  }
}
