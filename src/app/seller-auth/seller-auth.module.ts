import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerAuthRoutingModule } from './seller-auth-routing.module';
import { SellerAuthComponent } from './seller-auth.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SellerAuthComponent
  ],
  imports: [
    CommonModule,
    SellerAuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class SellerAuthModule { }
