import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './product.model';
import { ProductDetails } from '../product-details/product-details';
import { CartService } from '../services/cart-service';
import { ProductService } from '../services/product-service';

@Component({
  selector: 'app-catalog',
  imports: [CommonModule, ProductDetails],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css'
})

export class Catalog {
  products: IProduct[] = [];
  filter: string = '';

  constructor(
    private productSvs: ProductService,  
    private cartService: CartService, 
    private http: HttpClient) {
  }

  ngOnInit(): void{
    this.productSvs.getProducts().subscribe(products => {
      this.products = products;
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