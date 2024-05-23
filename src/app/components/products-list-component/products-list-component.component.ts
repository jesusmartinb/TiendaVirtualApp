import { Component } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-products-list-component',
  standalone: true,
  imports: [],
  templateUrl: './products-list-component.component.html',
  styleUrl: './products-list-component.component.scss'
})
export class ProductsListComponentComponent {

  public products: Product[] = [];

}
