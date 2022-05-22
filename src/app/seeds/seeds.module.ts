import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeedsRoutingModule } from './seeds-routing.module';
import { SeedsComponent } from './seeds/seeds.component';
import { SeedsS1Component } from './seeds-s1/seeds-s1.component';
import { SeedsSidebarComponent } from './seeds-sidebar/seeds-sidebar.component';
import { SeedsListComponent } from './seeds-list/seeds-list.component';


@NgModule({
  declarations: [
    SeedsComponent,
    SeedsS1Component,
    SeedsSidebarComponent,
    SeedsListComponent
  ],
  imports: [
    CommonModule,
    SeedsRoutingModule
  ]
})
export class SeedsModule { }
