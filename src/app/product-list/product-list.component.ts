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

  showSuccessMessage: string = '';
  showSuccessMessage2: string = '';

  /* ----::USE FOR SELLER PRODUCT STORING::---- */
  productList: undefined | addProduct[];

  constructor(
    private _selAdService: SellerAddProductService
  ) { }

  ngOnInit(): void {


    /* ----::USE FOR GET SELLER PRODUCT::---- */
    this.onGetProData();

  }

  /* ----::USE FOR GET SELLER PRODUCT::---- */
  onGetProData() {
    this._selAdService.onGetSellerProduct().subscribe(
      (result) => {
        this.productList = result;
        this.showSpinner = false;

        /* ----::USE FOR SELLER PRODUCT-LIST MESSAGE EMPTY SHOW::---- */
        if (this.productList.length > 0) {
          this.showSuccessMessage = '';
        }
        else {
          this.showSuccessMessage = 'Your product list is empty!';
        }
      },
      (error) => { }
    );
  }

  /* ----::USE FOR SELLER PRODUCT DELETE::---- */
  onDelProduct(proId: number) {
    this._selAdService.deleteProData(proId).subscribe(
      (res: any) => {
        this.onGetProData();

        /* ----::USE FOR SELLER DELETE SUCCESS MESSAGE SHOW::---- */
        this.showSuccessMessage2 = 'Your product is deleted!';
        setTimeout(() => {
          this.showSuccessMessage2 = '';
        }, 2000);
      }
    );
  }


}
