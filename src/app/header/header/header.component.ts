import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { RestService } from '../../_services/rest.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  citis:any[]
  constructor(public _authService: AuthService,private _rea: RestService){}

  ngOnInit() {
    this._rea.getCitis().subscribe(
      res => {
      this.citis=res.data
        console.log(res)
      },
      err => {
        console.log(err)
      })
  }

}
