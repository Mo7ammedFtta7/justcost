import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../translate.service';
@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent implements OnInit {
  constructor(private trans:TranslateService) { }
 public table:any[]=this.trans.lang_db;

  ngOnInit() {
   // console.log(this.table)
  }

}
