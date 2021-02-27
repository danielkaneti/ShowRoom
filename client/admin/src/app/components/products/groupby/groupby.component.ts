import { Component, OnInit } from '@angular/core';
import { AddProduct,groupProduct } from 'src/app/models/addProduct';
import { ProductsService} from '../../../services/products.service';


@Component({
  selector: 'app-groupby',
  templateUrl: './groupby.component.html',
  styleUrls: ['./groupby.component.css']
})
export class GroupbyComponent implements OnInit {
  mov:groupProduct;
  products:groupProduct;
  product: any[]=[

  ]

  constructor(private productservice: ProductsService) { }

  ngOnInit(): void {
    this.load();
  }
  
//'Science Fiction', 'Thriller', 'Crime', 'Action', 'Comedy']
  load(){

    this.productservice.getProductsByGenre().subscribe(data=>{
      this.products=data;

      var product= data['products'].map(a=>this.mov=product);
     
      
      
      // console.log(this.products);
      // console.log(this.products.products);
      
    });


  }


}
