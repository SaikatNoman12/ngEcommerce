import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { addProduct } from '../interfaces/seller-sign-up';
import { NumberValidateService } from './../services/seller/number-validate.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.scss']
})
export class SellerAddProductComponent implements OnInit {

  myRecForm!: FormGroup;

  constructor(
    private fBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.myRecForm = this.fBuilder.group({
      "productName": [null, [Validators.required]],
      "productPrice": [null,
        [
          Validators.required,
          NumberValidateService.numeric
        ]],
      "productColor": [null, [Validators.required]],
      "productCategory": [null, [Validators.required]],
      "productImage": [null, [Validators.required]],
      "productDescription": [null, [Validators.required]],
    });
  }


  get formControls() {
    return this.myRecForm.controls;
  }

  myRecFormSubmit() {
    if (this.myRecForm.valid) {
      const myRecValue: addProduct = this.myRecForm.value;
      console.log(myRecValue.productName);
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
