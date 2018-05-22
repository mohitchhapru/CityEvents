import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent implements OnInit {
  nameDemo = "Mohit";

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('/users/users')
    .toPromise()
    .then(response => console.log(response.json()));
  }

}
