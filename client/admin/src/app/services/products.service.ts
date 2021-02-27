import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../models/products';
import { AddProduct,groupProduct,scrapeM } from '../models/addProduct'
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})


export class ProductsService {


  private topRaUrl = environment.topRatedProductsUrl;
  private productsUrl = environment.productsUrl;
  private productSearchUrl=environment.productSearch;
  private productByGenreUrl= environment.productByGenre;
  private scrapeUrl= environment.scrapProduct;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.productsUrl);
  }

  topProductsByRating(): Observable<Products[]> {
    return this.http.get<Products[]>(this.topRaUrl);
  }

  deleteProduct(_id: number): Observable<Products> {
    const url = `${this.productsUrl}/${_id}`;
    return this.http.delete<Products>(url);

  }

  createProduct(newProduct: AddProduct): Observable<AddProduct> {
    return this.http.post<AddProduct>(this.productsUrl, newProduct);
  }

  getProductById(id: number): Observable<Products> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<Products>(url);
  }

  updateProduct( id:number ,product:AddProduct):Observable<AddProduct>{
    const url= `${this.productsUrl}/${id}`;
    return this.http.patch<AddProduct>(url, product);
  }

  getProductByParam(st:string):Observable<Products[]>{
    const url = `${this.productSearchUrl}/${st}`;
    return this.http.get<Products[]>(url);
  }

  getProductsByGenre():Observable<groupProduct>{
    const url = `${this.productByGenreUrl}`;
    //console.log(url);
    
    return this.http.get<groupProduct>(url);
  }

  scrapeProducts(ur:string): Observable<any>{
    const url = `${this.scrapeUrl}${ur}`;
    console.log(url);
    
    return this.http.get(url);
   
  }


}





