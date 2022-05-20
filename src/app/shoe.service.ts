import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from "./product.model";

type ShoeResponse = {
  products: Product[];
}

@Injectable({
  providedIn: 'root'
})
export class ShoeService {
  constructor(private http: HttpClient) { }

  get listShoes() {
    return this.http.get<ShoeResponse>("../assets/products.json");
  }
}
