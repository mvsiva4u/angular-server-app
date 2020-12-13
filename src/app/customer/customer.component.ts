import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/Customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent  {

  
  message: string = "Welcome to customer page";
  imgageUrl:string="assets/images/1.jpg";

  customerObj: any = {
    code: 1001,
    name: 'King Kocher',
    amount: 12000
  };

  userdetails: any = {
    username: '',
    password: ''
  };
  status: string = '';

  custObj: Customer = new Customer();

  loginMe(): void {
    alert('Hello');
    console.log(this.userdetails);
    if (this.userdetails.username == 'irfan' && this.userdetails.password == 'khan') {
      this.status = "Login Successful....."
    } else {
      status = "Login Failed...";
    }
  }


}
