import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../class/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private httpClient: HttpClient) { }

  register(newCustomer: Customer):Observable<any> {
    console.log(newCustomer);
    return this.httpClient.post("http://localhost:8080/customer/registration", newCustomer,{responseType:'json'});
  }

}
