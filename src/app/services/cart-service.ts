import { Injectable } from '@angular/core';
import { IProduct } from '../catalog/product.model';
import { ILineItem } from '../catalog/line-item.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {  
  constructor(private http: HttpClient) { };  
  private url: string = 'http://localhost:8081/api/';
  private cart: ILineItem[] = [];
    
  add(product: IProduct): void{
    let lineItem = this.findLineItem(product);    

    if (lineItem != undefined){
      lineItem.qty++;     
    } else {
      lineItem = {product: product, qty: 1};

      this.cart.push(lineItem);

      this.http.post(this.url +'cart', lineItem).subscribe(()=> {
        console.log(`Product "${product.name}" added to cart.`);
        console.log(`Total items in cart: ${this.cart.length}`);
        console.log(`Total price: ${this.getTotalPrice()}`);
      });
    }    
  }

  findLineItem(product: IProduct){
    return this.cart.find((item) => item.product.id === product.id);
  }

  getTotalPrice(): number{
    let total =
      Math.round(
          this.cart.reduce<number>((prev, cur) => {
            return (
              prev + cur.qty * (cur.product.price * (1 - cur.product.discount))
            );
          }, 0) * 100
        ) / 100;    

    return total;
  }
}