import { Component, OnInit } from '@angular/core';
import { AddProduct,groupProduct } from 'src/app/models/addProduct';
import { ProductsService} from '../../../services/products.service';


@Component({
  selector: 'app-groupby',
  templateUrl: './groupby.component.html',
  styleUrls: ['./groupby.component.css']
})
export class GroupbyComponent implements OnInit {
  products:groupProduct;

  constructor(private productservice: ProductsService) { }

  ngOnInit(): void {
    this.load();
  }

  load(){

    this.productservice.getProductsByGenre().subscribe(data=>{
      this.products=data;

      
    });


  }


}
