import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientContentLayoutComponent } from './client-content-layout/client-content-layout.component';
import {Routes} from "@angular/router";
import {UserRoutingModule} from "./user-routing.module";

const routes: Routes = [
  {
    path: 'list',
    component: ClientContentLayoutComponent
  }
];

@NgModule({
  declarations: [
    ClientContentLayoutComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
