import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SellerUpdateProductRoutingModule } from './seller-update-product-routing.module';
import { SellerUpdateProductComponent } from './seller-update-product.component';


@NgModule({
  declarations: [
    SellerUpdateProductComponent
  ],
  imports: [
    CommonModule,
    SellerUpdateProductRoutingModule,
    ReactiveFormsModule
  ]
})
export class SellerUpdateProductModule { }
