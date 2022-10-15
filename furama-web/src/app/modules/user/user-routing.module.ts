import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";
import {NewsComponent} from "./news/news.component";
import {UserContentLayoutComponent} from "../../layout/user/user-content-layout/user-content-layout.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {
    path: '',
    component: UserContentLayoutComponent,
    children: [
      {
        path: '',
        component :HomeComponent,
      },
      {
        path: 'home',
        redirectTo: '/', pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
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
