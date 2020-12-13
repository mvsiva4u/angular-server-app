import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { CustomerComponent } from './customer/customer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SupportComponent } from './support/support.component';
import { CustomersupportComponent } from './customersupport/customersupport.component';
import { EmployeesupportComponent } from './employeesupport/employeesupport.component';
import { UsersComponent } from './users/users.component';
import { UserService } from './service/user.service';
import {ProductsService } from './service/product.service';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserAddComponent } from './user-add/user-add.component';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    MainComponent,
    CustomerComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    SupportComponent,
    CustomersupportComponent,
    EmployeesupportComponent,
    UsersComponent,
    UserDetailComponent,
    UserAddComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
   
  ],
  providers: [UserService],
  bootstrap: [MainComponent]
})
export class AppModule { }
