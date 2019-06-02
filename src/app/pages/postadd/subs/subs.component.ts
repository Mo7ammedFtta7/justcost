import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-subs',
  templateUrl: './subs.component.html',
  styleUrls: ['./subs.component.css']
})
export class SubsComponent implements OnInit {
@Input() cat:any;

  constructor() { }
  
  ngOnInit() {
   // this.name=this.categoty 
  console.log("-------")

   console.log(this.cat)
  }
  
}
