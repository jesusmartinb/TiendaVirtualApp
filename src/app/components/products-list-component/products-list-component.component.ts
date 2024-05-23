import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-products-list-component',
  standalone: true,
  imports: [CommonModule, ProductCardComponent ],
  templateUrl: './products-list-component.component.html',
  styleUrl: './products-list-component.component.scss'
})
export class ProductsListComponentComponent implements OnInit {

  public products: Product[] = [];

  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (response: any) => this.products = response.products,
      error: (error: any) => alert('No hemos podido traer los productos desde el servidor, intentalo más tarde.')
    });
  }

}
