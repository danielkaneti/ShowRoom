import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { Products } from 'src/app/models/products';
import { AddProduct } from 'src/app/models/addProduct';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})



export class EditproductComponent implements OnInit {
  product: AddProduct
  products: Products;

  constructor(private rout: ActivatedRoute,
    private productService: ProductsService) { }

  ngOnInit(): void {

    let id = this.rout.snapshot.params['id'];

    this.productService.getProductById(id).subscribe(data => {
      this.products = data;
    });

  }

  updateProduct(titleN: string, yearN: number, genreN: string,descriptionN: string, 
    image_urlN: string, trailer_videoN: string) {

    let id = this.rout.snapshot.params['id'];

    const productNew: AddProduct = ({
     
      title: titleN,
      year: yearN,
      genre: genreN,
      description: descriptionN,
      image_url: image_urlN,
      trailer_video: trailer_videoN
      
    });

    this.productService.updateProduct(id, productNew).subscribe();
    

  }
  alert(){
    alert("Success");
  }

}

