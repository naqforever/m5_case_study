import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ManagerContentLayoutComponent} from "../admin/manager-content-layout/manager-content-layout.component";
import {ClientContentLayoutComponent} from "./client-content-layout/client-content-layout.component";

const routes: Routes = [
  {
    path: '',
    component: ClientContentLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
