import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { addProduct } from '../interfaces/seller-sign-up';
import { NumberValidateService } from '../services/seller/number-validate.service';
import { SellerAddProductService } from './../services/seller/seller-add-product.service';

const checkUrl = () => {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value !== null ? control.value : '';
    const valueSlice = value.slice(0, 8);

    if (value === null || value === '') {
      return null;
    }

    if (value && valueSlice.length > 0 && valueSlice === 'https://') {
      return null;
    }
    else {
      return {
        "nomatch": true
      };
    }

  };
};

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.scss']
})
export class SellerUpdateProductComponent implements OnInit {

  /* /-----::USE FOR ADD PRODUCT FORM::-----/ */
  myRecForm!: FormGroup;

  /* /-----::USE FOR LOADER::-----/ */
  loader: boolean = true;

  /* /-----::USE FOR SUCCESS::-----/ */
  success: string = '';

  /* /-----::USE FOR SUCCESS::-----/ */
  getSellerProduct: undefined | addProduct;


  /* /-----::USE FOR ADD PRODUCT FORM::-----/ */
  showSuccess: undefined | string;

  constructor(
    private router: Router,
    private fBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private _selAddService: SellerAddProductService
  ) { }

  ngOnInit(): void {

    /* /-----::USE FOR ADD PRODUCT FORM::-----/ */
    this.myRecForm = this.fBuilder.group({
      "productName": [null, [Validators.required]],
      "productPrice": [null, [Validators.required, NumberValidateService.numeric]],
      "productColor": [null, [Validators.required]],
      "productCategory": [null, [Validators.required]],
      "productImage": [null, [Validators.required, checkUrl()]],
      "productDescription": [null, [Validators.required]],
    });

    /* /-----::USE FOR SET FORM DATA::-----/ */
    let proUserId = this.activatedRoute.snapshot.paramMap.get('userID');
    this._selAddService.getSinglePro(Number(proUserId)).subscribe(
      (result: addProduct) => {

        /* /-----::USE FOR LOADER::-----/ */
        this.loader = false;

        /* /-----::USE SELLER SINGLE PRODUCT STORE::-----/ */
        this.getSellerProduct = result;

        /* /-----::USE FOR REACTIVE FORM SET VALUE::-----/ */
        this.myRecForm.setValue(
          {
            'productName': result?.productName,
            'productPrice': result?.productPrice,
            'productColor': result?.productColor,
            'productCategory': result?.productCategory,
            'productImage': result?.productImage,
            'productDescription': result?.productDescription,
          }
        );

      }
    );

  }

  /* /-----::USE FOR ADD PRODUCT FORM::-----/ */
  get formControls() {
    return this.myRecForm.controls;
  }

  /* /-----::USE FOR ADD PRODUCT FORM::-----/ */
  myRecFormSubmit() {
    if (this.myRecForm.valid) {
      const myRecValue: addProduct = this.myRecForm.value;

      if (this.getSellerProduct) {
        myRecValue.id = this.getSellerProduct?.id;
      }
      this._selAddService.updatedProduct(myRecValue).subscribe(
        (result) => {
          this.showSuccess = 'Your product is updated!';
        }
      );

      setTimeout(() => {
        this.showSuccess = '';
        this.router.navigate(['seller-product-list']);
      }, 2000);

      /* /-----::USE FOR FORM RESET::-----/ */
      this.myRecForm.reset();
    }
    else {
      let key = Object.keys(this.formControls);

      key.filter(userData => {
        const control = this.formControls[userData];
        if (control !== null) {
          control.markAsTouched();
        }
      });
    }
  }

}
