import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from './product.model';
import { ProductDetails } from '../product-details/product-details';
import { CartService } from '../services/cart-service';
import { ProductService } from '../services/product-service';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catalog',
  imports: [CommonModule, ProductDetails, RouterLink],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css'
})

export class Catalog {
  products: IProduct[] = [];
  filter: string = '';

  constructor(
    private productSvs: ProductService,  
    private cartService: CartService, 
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void{
     // Загружаем данные
    this.productSvs.getProducts().subscribe(products => {
      this.products = products;
    });

    // Слушаем изменение параметра в URL
    this.route.params.subscribe(params => {
      this.filter = params['filter'] && params['filter'] !== 'All' ? params['filter'] : '';
    });
  }    

  getFilteredProducts() {
    return this.filter === '' 
    ? this.products 
    : this.products.filter(product => product.category === this.filter);
  }
  
  addToCart(product: IProduct): void{
    this.cartService.add(product);
    this.router.navigate(['/cart']);
  }
}