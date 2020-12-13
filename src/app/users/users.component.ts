import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
 /*  providers: [UserService] */
})
export class UsersComponent {
  message: string = "User Managment";

  //usersList: any;

  usersList:User[];

  /* First Way with out Service
   constructor(private http: HttpClient, private userService: UserService) {
    this.message=userService.message;
    http.get("https://jsonplaceholder.typicode.com/users").subscribe(result => {
      this.usersList = result;
      //console.log(result);
      console.log(this.usersList);
    })
  } */
  
//Second way with Service call
  constructor( private userService: UserService) {
    this.message=userService.message;
    this.userService.getAllUsers().subscribe(result => {
      this.usersList = result;
      //console.log(result);
      //console.log(this.usersList);
    });
  }

  /* userList: any = [
    { userId: 1001, userName: "Allen", userAge: 30 },
    { userId: 1002, userName: "Black", userAge: 23 },
    { userId: 1003, userName: "Games", userAge: 25 },
    { userId: 1004, userName: "Roy", userAge: 28 },
    { userId: 1005, userName: "Roy Fielding", userAge: 30 }
  ]; */

}
