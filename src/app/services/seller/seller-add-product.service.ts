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

  onAddProduct(data: addProduct) {
    return this.http.post(this.sellerProAddUrl, data);
  }

}
