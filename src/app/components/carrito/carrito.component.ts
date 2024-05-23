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

  constructor(
    private router: Router
  ) {
    this.items = this.router.getCurrentNavigation()?.extras?.state!['items'];
  }

  ngOnInit(): void {
    this.items = JSON.parse(sessionStorage.getItem('cart') || '[]');
  }
}
