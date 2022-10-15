import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlMessagesComponent } from './component/control-messages/control-messages.component';
import { SpinnerComponent } from './component/spinner/spinner.component';



@NgModule({
  declarations: [
    ControlMessagesComponent,
    SpinnerComponent
  ],
  exports: [
    ControlMessagesComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
