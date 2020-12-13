import { Injectable } from '@angular/core';

@Injectable(
  {
  providedIn: 'root'
}
)
export class DataserviceService {

  message:string="Hello Data Service";

  constructor() { }
}
