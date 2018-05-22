import { UserComponent } from './../user/user.component';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent implements OnInit {
  nameDemo = "Mohit";
  users:any;
  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('/users/users')
    .subscribe(res => this.users=res.json());
    //console.log(this.users);
  }

}
