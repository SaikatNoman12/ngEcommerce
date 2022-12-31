import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerDataRoutingModule } from './seller-data-routing.module';
import { SellerDataComponent } from './seller-data.component';


@NgModule({
  declarations: [
    SellerDataComponent
  ],
  imports: [
    CommonModule,
    SellerDataRoutingModule
  ]
})
export class SellerDataModule { }
