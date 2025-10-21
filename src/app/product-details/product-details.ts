import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() buy = new EventEmitter<IProduct>();

  // =================================  
  getProductImageUrl(product: IProduct): string  {
    return 'assets/images/' + product.imageFileName;
  }

  buyButtonClicked(product: IProduct): void{
    this.buy.emit();
  }  
}