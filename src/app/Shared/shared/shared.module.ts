import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NumberValidateService } from './../../services/seller/number-validate.service';
import { SellerService } from './../../services/seller/seller.service';
import { TruthyFalsyService } from './../../services/truthy-falsy.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    TruthyFalsyService,
    SellerService,
    NumberValidateService
  ]
})
export class SharedModule { }
