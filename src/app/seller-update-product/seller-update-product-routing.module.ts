import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerUpdateProductComponent } from './seller-update-product.component';

const routes: Routes = [
  {
    path: '',
    component: SellerUpdateProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerUpdateProductRoutingModule { }
