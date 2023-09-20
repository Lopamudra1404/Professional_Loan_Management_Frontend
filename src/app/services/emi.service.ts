import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoanCalculatorResult } from '../class/loan-calculator-result';

@Injectable({
  providedIn: 'root'
})
export class EMIService {

  constructor(private httpClient: HttpClient) { }

  calculateEMI(loanCalculatorDto: any): Observable<LoanCalculatorResult> {
    return this.httpClient.post<LoanCalculatorResult>("http://localhost:8080/customer/loan-calculator", loanCalculatorDto, {responseType:'json'});
  }
}
