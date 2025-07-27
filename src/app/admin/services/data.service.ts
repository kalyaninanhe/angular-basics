import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {}

  getUsers(){
    return this.httpClient.get('https://fakestoreapi.com/users')
  }

  getProducts(): Observable<any>{
    return this.httpClient.get('https://fakestoreapi.com/products')
  }
}
