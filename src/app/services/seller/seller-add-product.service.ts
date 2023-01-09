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

  /* ----::USE FOR SELLER PRODUCTS GET::---- */
  deleteProData(proId: number) {
    return this.http.delete(`http://localhost:3000/products/${proId}`);
  }

  /* ----::GET SINGLE PRODUCTS FOR UPDATE DATA::---- */
  getSinglePro(proUserId: number) {
    return this.http.get<addProduct>(`http://localhost:3000/products/${proUserId}`);
  }

  /* ----::USE FOR UPDATE DATA::---- */
  updatedProduct(product: addProduct) {
    return this.http.put(`http://localhost:3000/products/${product.id}`, product);
  }


}
