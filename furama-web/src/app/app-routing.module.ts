import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserContentLayoutComponent} from "./layout/user/user-content-layout/user-content-layout.component";
import {AdminContentLayoutComponent} from "./layout/admin/admin-content-layout/admin-content-layout.component";

const routes: Routes = [
  // {
  //   path: '',
  //   component: UserContentLayoutComponent,
  // },
  // {
  //   path: 'admin',
  //   component: AdminContentLayoutComponent
  // }
  {
    path: '',
    loadChildren: () => import('./modules/user/user.module').then(module => module.UserModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(module => module.AdminModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./modules/abc/abc.module').then(module => module.AbcModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
