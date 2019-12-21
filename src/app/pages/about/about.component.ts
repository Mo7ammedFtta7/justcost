import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../_services/api.service';
import { TranslateService } from '../../pipe/translate.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  data:any;
  loaded = true;
  constructor(private api:ApiService,public translte:TranslateService) { }
  ngOnInit() {
      // **  (API) get about
      this.api.get('aboutes').subscribe(
        next => {
          this.loaded = false;
          this.data = next.data;
        }
      );
      // ** end Of Api
  }

}
