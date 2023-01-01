import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

    });
  }


  get formControls() {
    return this.myRecForm.controls;
  }


}
