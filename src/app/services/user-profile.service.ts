import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(private httpClient:HttpClient) { }

  getCustomerById(customerId:number):Observable<any>{

    return this.httpClient.get("http://localhost:8080/customer/display/profile/" +customerId,{responseType:'json'})

  }

 

 

}
