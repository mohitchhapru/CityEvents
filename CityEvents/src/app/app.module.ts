import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddUserComponent } from './add-user/add-user.component';

import { FormsModule } from '@angular/forms';
import { GetUsersComponent } from './get-users/get-users.component';
import { UserComponent } from './user/user.component';
import { UsersService } from './users.service';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    GetUsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
