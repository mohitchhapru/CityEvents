import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  private userName;
  private firstName;
  private lastName;
  users:any;

  constructor(private userService:UsersService) { }

  ngOnInit() {}

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