import { Component, OnInit } from '@angular/core';
//import {UserServiceApi} from '../UserServiceApi';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  private userName;
  private firstName;
  private lastName;
  private users;

  constructor()  {}

  ngOnInit() {}

  addUser(){
  //  UsersServiceApi.addUser(this.userName, this.firstName, this.lastName).subscribe(res=>{
    //  this.users.push(res.json());
      this.userName="";
      this.firstName="";
      this.lastName="";
   // })
  }
}
