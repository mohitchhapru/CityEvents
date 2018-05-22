import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {  
  @Input('user')
  user: any;
  private modal;
  private userName;
  private firstName;
  private lastName;
  editUserFlag: boolean;  

  constructor(private userService:UsersService) { 
    this.editUserFlag=false;
  }

  ngOnInit() {
  }

  deleteUser(){        
    this.userService.deleteUser(this.user.id)
    .subscribe(res=>this.user=null);
  };

  UpdateUser(){
    this.userService.updateUser(this.user.id, this.userName, this.firstName,this.lastName).subscribe(res=>{
      this.user.userName=this.userName;
      this.user.firstName=this.firstName;
      this.user.lastName=this.lastName;
      this.editUserFlag=false;
    })   
  }

  editUser(){
    this.editUserFlag=true;
  }
}
