import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Loan } from '../class/loan';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(private httpClient: HttpClient) { }

  getAllLoans(): Observable<Loan[]> {
    return this.httpClient.get<Loan[]>("http://localhost:8080/loans",{responseType:'json'} );
  }
}
//return this.httpClient.post("http://localhost:8080/customer/login",newCustomer,{responseType:'json'});
