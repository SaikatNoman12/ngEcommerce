import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerDataComponent } from './seller-data.component';

const routes: Routes = [
  {
    path: '',
    component: SellerDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerDataRoutingModule { }
