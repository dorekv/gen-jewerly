import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discountDisplay'
})

export class DiscountDisplayPipe implements PipeTransform {

  transform(price: number, discount: number): string {
    const discountedPrice = price * (1 - discount);
    const discountPercent = Math.round(discount * 100);

    return `→ €${discountedPrice.toFixed(2)} (-${discountPercent}%)`; 
  }
}