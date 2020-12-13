
import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable()
export class ProductsService {
    constructor( private _http: HttpClient){}

    getProduct(){
       return this._http.get("http://localhost:3000/getproducts");
        
    }
}