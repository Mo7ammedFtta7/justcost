import { Component, OnInit } from '@angular/core';
declare function nav(type:any)
@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    nav('hide');
  }

}
