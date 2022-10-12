import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminContentLayoutComponent } from './layout/admin/admin-content-layout/admin-content-layout.component';
import { UserContentLayoutComponent } from './layout/user/user-content-layout/user-content-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminContentLayoutComponent,
    UserContentLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
