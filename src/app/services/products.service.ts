import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl: string = 'https://dummyjson.com';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(`${this.apiUrl}/products?limit=12`);
  }

  getProductById(id: number) {
    return this.http.get(`${this.apiUrl}/product/${id}`);
  }
}
