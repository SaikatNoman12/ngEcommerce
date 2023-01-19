import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NumberValidateService } from './../../services/seller/number-validate.service';
import { SellerAddProductService } from './../../services/seller/seller-add-product.service';
import { SellerService } from './../../services/seller/seller.service';
import { TruthyFalsyService } from './../../services/truthy-falsy.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    TruthyFalsyService,
    SellerService,
    NumberValidateService,
    SellerAddProductService
  ]
})
export class SharedModule { }
