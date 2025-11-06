import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './product.model';
import { ProductDetails } from '../product-details/product-details';
import { CartService } from '../cart-service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-catalog',
  imports: [CommonModule, ProductDetails],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css'
})

export class Catalog {
  products: IProduct[] = [];
  filter: string = '';
  private cartService: CartService = new CartService();
  private apiUrl = 'http://localhost:8081/api/catalog';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Load products from the Node.js API
    this.http.get<IProduct[]>(this.apiUrl)
      .pipe(
        catchError((error) => {
          console.error('❌ Error loading catalog:', error);
          return of([]); // Return empty array if request fails
        })
      )
      .subscribe((data) => {
        this.products = data;
      });
  }

  getFilteredProducts() {
    return this.filter === '' 
    ? this.products 
    : this.products.filter(product => product.category === this.filter);
  }
  
  addToCart(product: IProduct): void{
    this.cartService.add(product);
  }
}