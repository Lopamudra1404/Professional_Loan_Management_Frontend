import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../class/customer';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getAllCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>("http://localhost:8080/customers",{responseType:'json'} );
  }
 }
