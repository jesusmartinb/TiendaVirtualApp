import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharingDataService } from '../../services/sharing-data.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {

  public product: any = {};

  @Output() productEventEmitter: EventEmitter<Product> = new EventEmitter();

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
    private sharingDataService: SharingDataService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.productsService.getProductById(params['id']).subscribe({
          next: (response: any) => this.product = response,
          error: (error: any) => alert('No hemos podido traer el producto desde el servidor, intentalo más tarde.')
        });
      }
    )
  }

  addCart(product: Product) {
    this.sharingDataService.productEventEmitter.emit(product);
  }

  volver() {
    this.router.navigate(['/productos'])
  }
}
