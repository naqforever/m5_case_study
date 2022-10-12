import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserContentLayoutComponent} from "./layout/user/user-content-layout/user-content-layout.component";
import {AdminContentLayoutComponent} from "./layout/admin/admin-content-layout/admin-content-layout.component";

const routes: Routes = [
  {
    path: '',
    component: UserContentLayoutComponent,
  },
  {
    path: 'admin',
    component: AdminContentLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
