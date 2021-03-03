import { Component, OnInit } from '@angular/core';
import { AddProduct } from 'src/app/models/addProduct';
import { Products } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  products: Products[] = [];
  product: Products;
  tmp = "";
  productM = "";
  productC = "";
  productY = "";
  scrape:string;

  constructor(private productsService: ProductsService,
    private rout: Router) {
  }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.productsService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  onDelete(_id: number) {
    this.productsService.deleteProduct(_id).subscribe(() => {
      this.product = null;
      this.load();
    });
  }

  editProduct(id: number) {
    this.rout.navigate(['/products', id]);
    //console.log(this.rout.navigate(['/products', id]));
  }

  searchProduct() {
    this.tmp = this.productM + "=" + this.productC + "=" + this.productY;

    this.productsService.getProductByParam(this.tmp).subscribe(data => {
      this.products = data;
    });
  }

  scrapeProduct(){
    this.productsService.scrapeProducts(this.scrape).subscribe();
    console.log(this.scrape);
  }
}
