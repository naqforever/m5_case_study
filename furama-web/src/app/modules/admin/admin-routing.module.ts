import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ManagerContentLayoutComponent} from "./manager-content-layout/manager-content-layout.component";

const routes: Routes = [
  {
    path: '',
    component: ManagerContentLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
