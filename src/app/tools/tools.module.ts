import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolsRoutingModule } from './tools-routing.module';
import { ToolsComponent } from './tools/tools.component';
import { ToolsS1Component } from './tools-s1/tools-s1.component';
import { ToolsS2Component } from './tools-s2/tools-s2.component';


@NgModule({
  declarations: [
    ToolsComponent,
    ToolsS1Component,
    ToolsS2Component
  ],
  imports: [
    CommonModule,
    ToolsRoutingModule
  ]
})
export class ToolsModule { }
