import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeedsRoutingModule } from './seeds-routing.module';
import { SeedsComponent } from './seeds/seeds.component';


@NgModule({
  declarations: [
    SeedsComponent
  ],
  imports: [
    CommonModule,
    SeedsRoutingModule
  ]
})
export class SeedsModule { }
