import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FooterRoutingModule } from './footer-routing.module';
import { FooterComponent } from './footer.component';


@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    FooterRoutingModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
