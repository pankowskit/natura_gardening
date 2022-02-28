import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeedsComponent } from './seeds/seeds.component';

const routes: Routes = [
  {
    path: "seeds",
    component: SeedsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeedsRoutingModule { }
