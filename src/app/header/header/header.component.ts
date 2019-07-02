import { Component, OnInit} from '@angular/core';
import { AuthService } from '../../auth.service';
import { RestService } from '../../_services/rest.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  citis:any[]
  Search:string;
  constructor(public _authService: AuthService,private _rea: RestService,public router: Router){}

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


  GoSearch(){
    console.log(this.Search)
    this.router.navigate(['/results'],{queryParams:{search:this.Search}} );
  }

}
