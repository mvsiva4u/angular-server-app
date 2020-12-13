import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ProductsService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductsService]
  
})
export class ProductComponent implements OnInit {

  products:any=[];
  constructor(private _http: HttpClient,private _productService:ProductsService) { }

  
ngOnInit(): void {
  

    this._productService.getProduct().subscribe((data)=>{
      console.log(data);
     this.products=data;
    })
    
  }
}
