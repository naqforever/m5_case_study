import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AdminContentLayoutComponent} from "../../layout/admin/admin-content-layout/admin-content-layout.component";
import {CustomerComponent} from "./customer/customer.component";

const routes: Routes = [
  {
    path: '',
    component: AdminContentLayoutComponent,
    children: [
      {
        path: '',
        component :DashboardComponent
      },
      {
        path: 'customer',
        component :CustomerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
