import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { AddProduct } from '../../../models/addProduct';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})


export class AddProductComponent implements OnInit {
  
  @Output() upDate = new EventEmitter<string>();

  constructor(private productsService: ProductsService,
              private rout:Router) { }

  ngOnInit(): void {
  }


  createProduct( titleN: string, yearN: number, genreN: string,descriptionN: string, 
    image_urlN: string, trailer_videoN: string ) {

    const productNew : AddProduct =({
      title: titleN,
      year: yearN,
      genre: genreN,
      description: descriptionN,
      image_url: image_urlN,
      trailer_video: trailer_videoN

    });

    this.productsService.createProduct(productNew).subscribe();
    this.rout.navigate(['/products']);
    
  }
  

}
