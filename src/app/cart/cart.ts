import { Component, OnInit } from '@angular/core';
import { IProduct } from '../catalog/product.model';
import { CartService } from '../services/cart-service';

import { DiscountDisplayPipe } from '../pipes/discount-display-pipe';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, CurrencyPipe, DiscountDisplayPipe, RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})

export class Cart implements OnInit{
  private cart: IProduct[] = [];
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getCart().subscribe({
      next: (cart) => this.cart = cart
    });
  }

  get cartItems(): IProduct[] {
    return this.cart;
  }

  get cartTotal(): number {
    return this.cart.reduce((prev, next) => {
      let discount = next.discount && next.discount > 0 ? 1 - next.discount : 1;
      return prev + (next.price * discount);
    }, 0);
  }

  getProductImageUrl(product: IProduct): string {
    if (!product) return '';
    return `assets/images/${product.imageFileName}`;
  }

  removeFromCart(product: IProduct) {
    this.cartService.remove(product);
  }

}