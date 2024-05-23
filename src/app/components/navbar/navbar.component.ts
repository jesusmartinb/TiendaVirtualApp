import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartItem } from '../../interfaces/cart-item';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  @Input() items: CartItem[] = [];

}
