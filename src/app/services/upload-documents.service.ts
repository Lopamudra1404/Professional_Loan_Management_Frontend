import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Document } from '../class/document';
import { Customer } from '../class/customer';

@Injectable({
  providedIn: 'root'
})
export class UploadDocumentsService {

  // private baseUrl = "http://localhost:8080/customer/document";

  constructor(private http: HttpClient) { }

  addDocument(document: Document, customerId: number) {
    return this.http.post<Customer>("http://localhost:8080/customer/document/"+ customerId, document, {responseType:'json'});
  }
}