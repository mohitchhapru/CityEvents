import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddUserComponent } from './add-user/add-user.component';

import { FormsModule } from '@angular/forms';
import { GetUsersComponent } from './get-users/get-users.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    GetUsersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
