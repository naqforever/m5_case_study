import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientContentLayoutComponent } from './client-content-layout/client-content-layout.component';
import {Routes} from "@angular/router";
import {UserRoutingModule} from "./user-routing.module";
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {
    path: 'list',
    component: ClientContentLayoutComponent
  }
];

@NgModule({
  declarations: [
    ClientContentLayoutComponent,
    HomeComponent,
    ContactComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
