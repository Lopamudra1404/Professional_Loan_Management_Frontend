import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BankLogin } from '../class/bank-login';
import { Observable } from 'rxjs';
import { LoanAccount } from '../class/loan-account';
 

@Injectable({
  providedIn: 'root'
})
export class BankService {
 
  constructor(private httpClient:HttpClient ) { }
  login(bank: BankLogin):Observable<any> {
    console.log(bank);
    return this.httpClient.post(`http://localhost:8080/bank/login`,bank,{responseType:'json'});
  }
  getAllDisbursedLoans():Observable<any>{
    return this.httpClient.get(`http://localhost:8080/disbursed-Loans`,{responseType:"json"});
  }
    generateLoanAccount(loanId:number):Observable<any>{
      const requesBody={
        loanId:loanId
      };
      return this.httpClient.post(`http://localhost:8080/customer/account/${loanId}`,requesBody,{responseType:'json'});
 
    }
    getApprovedAndAccountGeneratedLoans():Observable<any>{
      return this.httpClient.get(`http://localhost:8080/loans/approved-and-account-generated-loans`,{responseType:"json"});
    }
    disburseLoanByLoanId(loanId:number):Observable<any>{
      // const requesBody={
      //   loanId:loanId
      // };
      return this.httpClient.patch(`http://localhost:8080/loan/disburse-Loan/${loanId}`,{responseType:"json"})
    }
    getAllAccounts():Observable<any>{
      return this.httpClient.get(`http://localhost:8080/loanaccounts`,{responseType:'json'});
    }
 

 
}
// disburseLoanByLoanId():Observable<any>{
 
// }
  // login(bankEmail: string, bankPassword: string): Observable<any> {
  //   const body = {
  //     bankEmail: bankEmail,
  //     bankPassword: bankPassword,
  //   };
  //   return this.httpClient.post(http://localhost:8080/bank/login,body);
 
 
 