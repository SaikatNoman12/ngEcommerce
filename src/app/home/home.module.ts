import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TimeCounterModule } from '../time-counter/time-counter.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TimeCounterModule,
  ]
})
export class HomeModule { }
