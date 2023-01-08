import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerGuard } from '../auth-guard/seller.guard';
import { ProductListComponent } from './product-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  },
  {
    path: 'seller-update-product/:userID',
    canActivate: [SellerGuard],
    loadChildren: () => import('../seller-update-product/seller-update-product.module')
      .then(m => m.SellerUpdateProductModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductListRoutingModule { }
