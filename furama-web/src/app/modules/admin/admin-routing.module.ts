import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ManagerContentLayoutComponent} from "./manager-content-layout/manager-content-layout.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AdminContentLayoutComponent} from "../../layout/admin/admin-content-layout/admin-content-layout.component";

const routes: Routes = [
  {
    path: '',
    component: ManagerContentLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component :DashboardComponent
      }
    ]
  },
  {
    path: 'q',
    component: AdminContentLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component :DashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
