import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TimeCounterRoutingModule } from './time-counter-routing.module';
import { TimeCounterComponent } from './time-counter.component';


@NgModule({
  declarations: [
    TimeCounterComponent
  ],
  imports: [
    CommonModule,
    TimeCounterRoutingModule,
    RouterModule
  ],
  exports: [
    TimeCounterComponent
  ]
})
export class TimeCounterModule { }
