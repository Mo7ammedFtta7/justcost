import { Component, OnInit} from '@angular/core';
import { AuthService } from '../../auth.service';
import { RestService } from '../../_services/rest.service';
import { apis } from '../../_services/apis';

import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '../../pipe/translate.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  citis:any[]
  countries:any[];
  Search:string;
  categories:any[];
  errorMsg: any;
  constructor(public _authService: AuthService,private _rea: RestService,private _api: apis,public router: Router,public translate :TranslateService){}
  ngOnInit() {

    // this.getCitisOfCountry(this._authService.getUser().country.id);
    this._rea.getCountries().subscribe(
      res => {
      this.countries=res.data
      },
      err => {
        console.log(err)
      })

      this._api.categoris().subscribe(res =>{this.categories = res['data']; console.log(res['data'])},error => this.errorMsg = error);


  }


  GoSearch(){
    console.log(this.Search)
    this.router.navigate(['/results'],{queryParams:{search:this.Search}} );
  }

  getCitisOfCountry(countryId)
  {
    this._rea.getCitis(countryId).subscribe(
      res => {
      this.citis=res.data
      console.log(res.data);
      },
      err => {
        console.log(err)
      })
  }
  

}
