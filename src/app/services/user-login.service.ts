import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../class/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor(private httpClient: HttpClient) { }

  login(newCustomer: Customer):Observable<any> {
    return this.httpClient.post("http://localhost:8080/customer/login",newCustomer);
  }
}
