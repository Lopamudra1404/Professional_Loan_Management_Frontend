import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../class/admin';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient : HttpClient) { }

  approveLoan(loanId: number): Observable<any> {
    const requestBody = {
      loanId: loanId
    };
    return this.httpClient.patch(`http://localhost:8080/approve/${loanId}`, requestBody, {responseType:'json'});
  }



	
}

