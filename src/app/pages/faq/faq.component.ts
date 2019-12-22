import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../_services/api.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  question:any;
  loaded = true;
  constructor(private api:ApiService) { }

  ngOnInit() {
    this.api.get('fqas').subscribe(
      next => {
        this.loaded = false;
        this.question = next.data;
      }
    )
  }

}
