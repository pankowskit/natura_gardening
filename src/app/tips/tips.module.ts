import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipsRoutingModule } from './tips-routing.module';
import { TipsComponent } from './tips/tips.component';
import { TipsS1Component } from './tips-s1/tips-s1.component';
import { TipsS2Component } from './tips-s2/tips-s2.component';
import { TipsS3Component } from './tips-s3/tips-s3.component';
import { TipsS4Component } from './tips-s4/tips-s4.component';


@NgModule({
  declarations: [
    TipsComponent,
    TipsS1Component,
    TipsS2Component,
    TipsS3Component,
    TipsS4Component
  ],
  imports: [
    CommonModule,
    TipsRoutingModule
  ]
})
export class TipsModule { }
