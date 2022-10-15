import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserRoutingModule} from "./user-routing.module";
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    NewsComponent,
    LoginComponent
  ],
    imports: [
        CommonModule,
        UserRoutingModule,
        ReactiveFormsModule,
        SharedModule,
        FontAwesomeModule
    ]
})
export class UserModule { }
