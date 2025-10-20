import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from './product.model';
import { DiscountDisplayPipe } from '../pipes/discount-display-pipe';

@Component({
  selector: 'app-catalog',
  imports: [CommonModule, DiscountDisplayPipe],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss'
})

export class Catalog {
  products: IProduct[];
  filter: string = '';


  // =================================
  //          Test data
  // =================================
  constructor() {
    this.products = [
      // Necklaces
      {
        id: 1,
        description: 'Elegant gold necklace with a delicate pendant, perfect for special occasions.',
        name: 'Gold Necklace',
        imageFileName: 'gold-necklace.png',
        price: 195.50,
        discount: 0.2,
        category: 'Necklaces'
      },

      // Earrings
      {
        id: 2,
        description: 'Stylish silver hoop earrings with a smooth polished finish, ideal for everyday wear.',
        name: 'Silver Hoop Earrings',
        imageFileName: 'silver-hoop-earrings.png',
        price: 89.99,
        discount: 0,
        category: 'Earrings'
      },
      {
        id: 3,
        description: 'Delicate pearl stud earrings set in sterling silver, timeless and elegant.',
        name: 'Pearl Stud Earrings',
        imageFileName: 'pearl-stud-earrings.png',
        price: 75.00,
        discount: 0.1,
        category: 'Earrings'
      },

      // Bracelets
      {
        id: 4,
        description: 'Elegant gold chain bracelet with a minimalist design, perfect for layering.',
        name: 'Gold Chain Bracelet',
        imageFileName: 'gold-chain-bracelet.png',
        price: 120.00,
        discount: 0,
        category: 'Bracelets'
      },
      {
        id: 5,
        description: 'Charming leather bracelet with stainless steel clasp, combining casual and classy style.',
        name: 'Leather Charm Bracelet',
        imageFileName: 'leather-charm-bracelet.png',
        price: 65.50,
        discount: 0.1,
        category: 'Bracelets'
      },

      // Sets
      {
        id: 6,
        description: 'Luxury jewelry set including matching gold necklace and earrings with crystal accents.',
        name: 'Gold Crystal Jewelry Set',
        imageFileName: 'gold-crystal-set.png',
        price: 320.00,
        discount: 0.3,
        category: 'Sets'
      }
    ];
  };

  getProductImageUrl(product: IProduct): string  {
    return 'assets/images/' + product.imageFileName;
  }

  getFilteredProducts() {
    return this.filter === '' 
    ? this.products 
    : this.products.filter(product => product.category === this.filter);
  }

  getTextDecoration(product: IProduct): Array<string> {
    if(product.discount > 0){
      return ['greyed']; // can be many classes
    }
    
    return ['pink']; // can be many classes
  }
}