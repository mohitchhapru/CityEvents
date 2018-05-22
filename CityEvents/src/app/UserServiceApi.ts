/*
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class UserServiceApi {

  constructor(private http:Http) { }
  allUsers(){
    return this.http.get('/users/users');
  }
  addUser(userName, firstName, lastName){
    return this.http.post('/users',{
      "userName": userName,
      "firstName":firstName,
      "lastName":lastName
    })
  }
  deleteUser(id){
    return this.http.delete(`/users/users/${id}`);
  }
  updateUser(id,userName,firstName,lastName){
    return this.http.patch(`/users/users/${id}`,{
      "userName": userName,
      "firstName":firstName,
      "lastName":lastName
    })
  }

}
*/
