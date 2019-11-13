import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { RestService } from '../../_services/rest.service';

import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '../../pipe/translate.service';
import { ApiService } from '../../_services/api.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  citis: any[]
  countries: any[];
  Search: string;
  categories: any[];
  errorMsg: any;
  Category: string = "";
  city: string = "";
  lang : string =this.translate.getlocalLang();
  constructor(public _authService: AuthService, private _rea: RestService, private _api: ApiService, public router: Router, public translate: TranslateService) { }
  ngOnInit() {

    // this.getCitisOfCountry(this._authService.getUser().country.id);
    this._rea.getCountries().subscribe(
      res => {
        this.countries = res.data
        // console.log(res.data[0]['id'])
        this.getCitisOfCountry(res.data[0]['id'])
      },
      err => {
        console.log(err)
      })

    this._api.categoris().subscribe(res => {
    this.categories = res['data'];
    }, error => this.errorMsg = error);

    // this.getCitisOfCountry(this.countries[0]);

  }
  selectCat(event: any) {
    this.Category = event.target.value;
  }

  GoSearch(Search) {
    var queryParams = {};
    //search:this.Search
    if (this.Search != undefined) {
      queryParams['Search'] = this.Search;
    }

    if (this.Category != "0" || this.Category != null) {
      queryParams['category'] = this.Category;
    }

    if (this.city != "0" || this.Category != null) {
      queryParams['city'] = this.city;
    }

    //console.log(queryParams)

    this.router.navigate(['/results'], { queryParams: { search: this.Search } });
  }

  getCitisOfCountry(countryId) {
    this._rea.getCitis(countryId).subscribe(
      res => {
        this.citis = res.data
        // console.log(res.data);
      },
      err => {
        console.log(err)
      })
  }

  selectCity(event: any) {
    this.city = event.target.value;
  }
}
