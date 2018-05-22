import { UserComponent } from './../user/user.component';
import { Component, OnInit, Injectable } from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})

export class GetUsersComponent implements OnInit {  
  users:any;
  private userName;
  private firstName;
  private lastName;

  constructor(private userService:UsersService) { }

  ngOnInit() {
    this.userService.allUsers()    
    .subscribe(res => this.users=res.json());    
  }

  addNewUser(){
    console.log("Adding : "+this.userName+this.firstName+this.lastName);    
    this.userService.addUser(this.userName, this.firstName,this.lastName).subscribe(res=>{
      this.users.push(res.json());
      this.userName="";
      this.firstName="";
      this.lastName="";
    })
  }    

}
