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
 public temp:any=localStorage.getItem("tempDb")!=null ?JSON.parse(localStorage.getItem("tempDb")):JSON.parse("{}")

  ngOnInit() {
  //  console.log(this.table)
  //  console.log( JSON.stringify(this.trans.temp_database));

  //  this.trans.db2.forEach(element => {

  //   this.trans.setRow(element['key'],this.trans.def_lang,element['langs'][0]['word'])
     
  //   });
   // this.trans.db2

   //console.log( JSON.stringify(this.trans.db2));

  }

}
