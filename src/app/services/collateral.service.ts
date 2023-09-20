import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Collateral } from '../class/collateral';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollateralService {
  constructor(private httpClient:HttpClient) { }

  addCollateral(collateral:Collateral,loanId:number):Observable<any>{
    console.log(collateral);
    return this.httpClient.post("http://localhost:8080/customer/collateral/"+ loanId ,collateral, {responseType:'json'})
  }
}
