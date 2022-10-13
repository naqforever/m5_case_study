import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ManagerContentLayoutComponent} from "../admin/manager-content-layout/manager-content-layout.component";
import {ClientContentLayoutComponent} from "./client-content-layout/client-content-layout.component";
import {DashboardComponent} from "../admin/dashboard/dashboard.component";
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";
import {NewsComponent} from "./news/news.component";

const routes: Routes = [
  {
    path: '',
    component: ClientContentLayoutComponent,
    children: [
      {
        path: 'home',
        component :HomeComponent,
        runGuardsAndResolvers: 'always'
      },
      {
        path: 'aaa',
        redirectTo: '/home', pathMatch: 'full'
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'news',
        component: NewsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
