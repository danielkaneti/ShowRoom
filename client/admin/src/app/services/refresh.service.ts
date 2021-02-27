import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AddProductComponent } from '../components/products/add-product/add-product.component'
import { addUser } from '../models/addUser';



@Injectable({
  providedIn: 'root'
})

export class RefreshService {

  private source= new BehaviorSubject(null);
  refreshProduct= this.source.asObservable();

  constructor() { }

  refProduct( user: addUser){
    this.source.next(user);
  }

}
