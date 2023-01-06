import { Component, OnInit } from '@angular/core';
import { SellerAddProductService } from '../services/seller/seller-add-product.service';
import { addProduct } from './../interfaces/seller-sign-up';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  /* ----::USE FOR SPINNER SHOW::---- */
  showSpinner: boolean = true;

  /* ----::USE FOR SELLER PRODUCT STORING::---- */
  productList: undefined | addProduct[];

  constructor(
    private _selAdService: SellerAddProductService
  ) { }

  ngOnInit(): void {

    this._selAdService.onGetSellerProduct().subscribe(
      (result) => {
        this.productList = result;
        this.showSpinner = false;
      },
      (error) => { }
    )

  }



}
