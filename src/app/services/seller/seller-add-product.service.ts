import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addProduct } from './../../interfaces/seller-sign-up';

@Injectable({
  providedIn: 'root'
})
export class SellerAddProductService {

  sellerProAddUrl: string = 'http://localhost:3000/products';

  constructor(
    private http: HttpClient
  ) { }

  /* ----::USE FOR SELLER ADD PRODUCT::---- */
  onAddProduct(data: addProduct) {
    return this.http.post(this.sellerProAddUrl, data);
  }

  /* ----::USE FOR SELLER PRODUCTS GET::---- */
  onGetSellerProduct() {
    return this.http.get<addProduct[]>('http://localhost:3000/products');
  }

}
