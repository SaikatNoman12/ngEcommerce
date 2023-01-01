import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerAddProductComponent } from './seller-add-product.component';

const routes: Routes = [
  {
    path: '',
    component: SellerAddProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerAddProductRoutingModule { }
