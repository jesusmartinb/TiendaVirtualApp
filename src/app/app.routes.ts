import { Routes } from '@angular/router';
import { ProductsListComponentComponent } from './components/products-list-component/products-list-component.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { RutaNoEncontradaComponent } from './components/ruta-no-encontrada/ruta-no-encontrada.component';

export const routes: Routes = [
  { path: 'productos', component: ProductsListComponentComponent },
  { path: 'productos-detalle/:id/:stock', loadComponent: () => import('./components/product-detail/product-detail.component').then(
      (c) => c.ProductDetailComponent
    ) },
  { path: 'empresa', component: EmpresaComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: '', redirectTo: '/productos', pathMatch: 'full' },
  { path: '**', component: RutaNoEncontradaComponent }
];
