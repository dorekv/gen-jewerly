import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from '../catalog/product.model';
import { DiscountDisplayPipe } from '../pipes/discount-display-pipe';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, DiscountDisplayPipe],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})

export class ProductDetails {
  @Input() product!: IProduct;
  cart: IProduct[] = [];

  // =================================  
  getProductImageUrl(product: IProduct): string  {
    return 'assets/images/' + product.imageFileName;
  }

  addToCart(product: IProduct): void{
    this.cart.push(product);
    console.log(`Product "${product.name}" added to cart. Total items in cart: ${this.cart.length}`);
  }  
}