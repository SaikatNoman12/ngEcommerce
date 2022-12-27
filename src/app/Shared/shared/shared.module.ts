import { SellerService } from './../../services/seller/seller.service';
import { TruthyFalsyService } from './../../services/truthy-falsy.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    TruthyFalsyService,
    SellerService
  ]
})
export class SharedModule { }
