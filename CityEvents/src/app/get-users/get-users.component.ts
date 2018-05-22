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
  constructor(private userService:UsersService) { }

  ngOnInit() {
    this.userService.allUsers()    
    .subscribe(res => this.users=res.json());    
  }

}
