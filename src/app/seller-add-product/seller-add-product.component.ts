import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { addProduct } from '../interfaces/seller-sign-up';
import { NumberValidateService } from './../services/seller/number-validate.service';
import { SellerAddProductService } from './../services/seller/seller-add-product.service';

const checkUrl = () => {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value !== null ? control.value : '';
    const valueSlice = value.slice(0, 8);

    if (value === null || value === '') {
      return null;
    }

    if (value && valueSlice.length > 0 && (valueSlice === 'https://' || valueSlice === 'http://')) {
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
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.scss']
})

export class SellerAddProductComponent implements OnInit {

  /* /-----::USE FOR ADD PRODUCT FORM::-----/ */
  myRecForm!: FormGroup;

  /* /-----::USE FOR ADD PRODUCT FORM::-----/ */
  showSuccess: undefined | string;

  constructor(
    private fBuilder: FormBuilder,
    private selAddProService: SellerAddProductService
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

  }

  /* /-----::USE FOR ADD PRODUCT FORM::-----/ */
  get formControls() {
    return this.myRecForm.controls;
  }

  /* /-----::USE FOR ADD PRODUCT FORM::-----/ */
  myRecFormSubmit() {
    if (this.myRecForm.valid) {
      const myRecValue: addProduct = this.myRecForm.value;

      /* /-----::USE FOR ADD PRODUCT IN DATABASE::-----/ */
      this.selAddProService.onAddProduct(myRecValue).subscribe(
        (result: any) => {
          if (result) {
            this.showSuccess = 'Your product add successfully!';
          }
          setTimeout(() => this.showSuccess = '', 3000);
        },
        (err: any) => { }
      );

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
