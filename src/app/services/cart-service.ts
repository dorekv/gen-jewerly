import { Injectable } from '@angular/core';
import { IProduct } from '../catalog/product.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {  
  private url: string = 'http://localhost:8081/api/cart';
  private cart: BehaviorSubject<IProduct[]> = new BehaviorSubject<IProduct[]>([]);

  constructor(private http: HttpClient) { 
    this.http.get<IProduct[]>(this.url).subscribe({
      next: (cart) => this.cart.next(cart)
    });
  };  

  getCart(): Observable<IProduct[]> {
    return this.cart.asObservable();
  }
    
  add(product: IProduct): void{
    const newCart = [...this.cart.getValue(), product];
    this.cart.next(newCart);

    this.http.post(this.url, newCart).subscribe(()=> {
      console.log(`Product "${product.name}" added to cart.`);
    });
  }

  remove(product: IProduct): void{
    let newCart = this.cart.getValue().filter(item => item !== product);
    this.cart.next(newCart);

    this.http.post(this.url, newCart).subscribe(()=> {
        console.log(`Product "${product.name}" removed from cart.`);
      });
  }
}