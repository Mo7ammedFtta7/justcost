import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { apis } from '../../_services/apis';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  id: number;
  private sub: any;
  public  products: any[] ;

  constructor(private _api: apis,private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });

   this.products=this._api.GetApi('products')
   console.log('------------------------');

   console.log(this.products);
  }

}
