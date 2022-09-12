import { product } from './../../core/Models/product';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  selectedItemSubject = new BehaviorSubject<product[]>([])
  selectedItems = this.selectedItemSubject.asObservable()
  constructor() { }

  emitSelectedProduct(products:product[]){
    this.selectedItemSubject.next(products)
  }

  addItemToCart(product:product){
    this.selectedItems.pipe(take(2),map((products)=>{
      products.push(product)
      let prodArr=JSON.stringify(products)
      localStorage.setItem("products",prodArr)
    })).subscribe()
  }
}
