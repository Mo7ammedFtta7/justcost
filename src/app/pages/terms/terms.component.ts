import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../_services/api.service';
import { TranslateService } from '../../pipe/translate.service';
@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {
  data:any;
  constructor(private api:ApiService,public translte:TranslateService) { }

  ngOnInit() {
    // **  (API) get Terms
    this.api.get('terms').subscribe(
      next => {
        this.data = next.data;
      }
    );
    // ** end Of Api
  }

}
