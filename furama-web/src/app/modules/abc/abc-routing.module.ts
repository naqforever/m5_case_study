import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientContentLayoutComponent} from "../user/client-content-layout/client-content-layout.component";
import {TestCompoComponent} from "./test-compo/test-compo.component";

const routes: Routes = [
  {
    path: 't',
    component: TestCompoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbcRoutingModule { }
