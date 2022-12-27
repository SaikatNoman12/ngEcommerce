import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerHomeRoutingModule } from './seller-home-routing.module';
import { SellerHomeComponent } from './seller-home.component';


@NgModule({
  declarations: [
    SellerHomeComponent
  ],
  imports: [
    CommonModule,
    SellerHomeRoutingModule
  ]
})
export class SellerHomeModule { }
