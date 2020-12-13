import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/User';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  id: any;
  //userdetail: any;
  userdetail: User =new User();
  constructor(private router: ActivatedRoute, private userService: UserService) {
    this.id = this.router.snapshot.paramMap.get("id");
    console.log(this.id);
    this.userService.getUserById(this.id).subscribe(result => {
      this.userdetail = result;
      console.log(result);
    })
  }



}
