
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';


@Injectable()
export class UserService {
    message: string = "Hello Everyone this  is Sevice message";

    constructor(private http: HttpClient) {

    }
    display(): string {
        return "Hello to All";
    }
    
    /* 
     
    getAllUsers(): Observable<Object[]> {
         return this.http.get<Object[]>("https://jsonplaceholder.typicode.com/users");
           } 

           */
    /*  
    
    getUserById(id:number):Observable<Object>{
         return this.http.get("https://jsonplaceholder.typicode.com/users/" +id)
     } 
     
     */

    getAllUsers(): Observable<User[]> {
        return this.http.get<User[]>("https://jsonplaceholder.typicode.com/users");
    }

    getUserById(id: number): Observable<User> {
        return this.http.get<User>("https://jsonplaceholder.typicode.com/users/" + id);
    }

    addNewUser(user: User): Observable<User>{
        console.log(user);
        return this.http.post<User>("https://jsonplaceholder.typicode.com/users", user);
    }
}