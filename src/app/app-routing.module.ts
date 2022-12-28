import { SellerGuard } from './auth-guard/seller.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module')
      .then(m => m.HomeModule),
    pathMatch: 'full'
  },
  {
    path: 'seller',
    loadChildren: () => import('./seller-auth/seller-auth.module')
      .then(m => m.SellerAuthModule),
  },
  {
    path: 'seller-home',
    canActivate: [SellerGuard],
    loadChildren: () => import('./seller-home/seller-home.module')
      .then(m => m.SellerHomeModule),
  },
  {
    path: '**',
    loadChildren: () => import('./error/error.module')
      .then(m => m.ErrorModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
