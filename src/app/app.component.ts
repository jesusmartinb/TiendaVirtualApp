import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartItem } from './interfaces/cart-item';
import { SharingDataService } from './services/sharing-data.service';
import { Product } from './interfaces/product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  public items: CartItem[] = [];

  public product!: Product;
  public state: any;

  public total: number = 0;

  constructor(
    private sharingDataService: SharingDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.items = JSON.parse(localStorage.getItem('cart') || '[]');
    this.calculateTotal();
    this.addCart(this.product);
  }

  addCart(product: Product) {
    this.sharingDataService.productEventEmitter.subscribe(product => {
      const hasItem = this.items.find(item => item.product.id === product.id);
      if (hasItem) {
        this.items = this.items.map(item => {
          if (item.product.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + 1
            }
          }
          return item;
        })
      } else {
        this.items = [... this.items, { product: { ...product }, quantity: 1 }];
      }

      this.calculateTotal();
      this.saveSession();

      this.router.navigate(['/productos'], {
        state:  {items: this.items, total: this.total}
      });

    })
  }

  saveSession(): void{
    sessionStorage.setItem('cart', JSON.stringify(this.items));
  }

  calculateTotal(): void {
    this.total = this.items.reduce((accumulator, item) => accumulator + item.quantity * item.product.price, 0);
  }
}
