import { Injectable } from '@angular/core';
import { Admin } from '../class/admin';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  constructor(private httpClient: HttpClient ) { }

  login(admin:Admin): Observable<any> {
    console.log(admin)
    return this.httpClient.post<any>("http://localhost:8080/admin/login", admin, {responseType:'json'});
  }
}
