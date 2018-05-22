import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UsersService {

  constructor(private http:Http) { }

  allUsers(){
    return this.http.get('/users/users');
  }

  addUser(userName, firstName, lastName){
    console.log("Adding : "+userName+firstName+lastName);
    return this.http.post('/users',{
      "userName": userName,
      "firstName":firstName,
      "lastName":lastName
    })
  }

  deleteUser(id){
    console.log("Deleting user id "+id);
    return this.http.delete(`/users/users/${id}`);
  }

  updateUser(id,userName,firstName,lastName){
    console.log("Updating : "+userName+firstName+lastName);
    return this.http.patch(`/users/${id}`,{
      "userName": userName,
      "firstName":firstName,
      "lastName":lastName
    })
  }
}