import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbcRoutingModule } from './abc-routing.module';
import { TestCompoComponent } from './test-compo/test-compo.component';


@NgModule({
  declarations: [
    TestCompoComponent
  ],
  imports: [
    CommonModule,
    AbcRoutingModule
  ]
})
export class AbcModule { }
