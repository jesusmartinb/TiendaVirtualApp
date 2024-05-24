import { Component, Input } from '@angular/core';
import { SharingDataService } from '../../services/sharing-data.service';
import { CartItem } from '../../interfaces/cart-item';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent {

  @Input() items: CartItem[] = [];

  public total: number = 0;

  constructor(
    private router: Router,
    private sharingDataService: SharingDataService
  ) {
    this.items = this.router.getCurrentNavigation()?.extras?.state!['items'];
    this.total = this.router.getCurrentNavigation()?.extras?.state!['total'];
  }

  ngOnInit(): void {
    this.items = JSON.parse(sessionStorage.getItem('cart') || '[]');
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.total = this.items.reduce((accumulator, item) => accumulator + item.quantity * item.product.price, 0);
  }

  removeItem(id: number): void {
    this.sharingDataService.idProductEventEmitter.emit(id);
  }
}
