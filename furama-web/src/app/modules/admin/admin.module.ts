import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerContentLayoutComponent } from './manager-content-layout/manager-content-layout.component';
import {Routes} from "@angular/router";
import {AdminContentLayoutComponent} from "../../layout/admin/admin-content-layout/admin-content-layout.component";
import {AdminRoutingModule} from "./admin-routing.module";
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'list',
    component: AdminContentLayoutComponent
  }
];

@NgModule({
  declarations: [
    ManagerContentLayoutComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
