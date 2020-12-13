import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
  /* providers: [UserService] */
})
export class ContactComponent  {

  message: string = "User Managment";

  constructor(private userService: UserService, private dataService: DataserviceService) { 


    this.message=dataService.message;
  }

  

}
