import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { SellerAddProductRoutingModule } from './seller-add-product-routing.module';
import { SellerAddProductComponent } from './seller-add-product.component';


@NgModule({
  declarations: [
    SellerAddProductComponent
  ],
  imports: [
    CommonModule,
    SellerAddProductRoutingModule,
    ReactiveFormsModule
  ]
})
export class SellerAddProductModule { }
