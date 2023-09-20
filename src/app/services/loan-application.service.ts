import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../class/customer';
import { Observable } from 'rxjs';
import { Loan } from '../class/loan';

@Injectable({
  providedIn: 'root'
})
export class LoanApplicationService {


  constructor(private httpClient: HttpClient) { }
  apply(loan: Loan, customerId:number):Observable<any> {
  
    return this.httpClient.post("http://localhost:8080/customer/loan/" + customerId, loan,{responseType:'json'});
  }
}
