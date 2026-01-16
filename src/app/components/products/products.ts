import { Component } from '@angular/core';
import { Product, ProductService } from '../../services/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {

  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  viewProduct(productId: string): void {
    this.router.navigate(['/product', productId]);
  }

}
