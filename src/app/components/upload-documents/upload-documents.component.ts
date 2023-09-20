import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { UploadDocumentsService } from 'src/app/services/upload-documents.service';
import { Document } from 'src/app/class/document';
import { DocumentType } from 'src/app/class/document-type';
import { Router } from '@angular/router';
import { Customer } from 'src/app/class/customer';

@Component({
  selector: 'app-upload-documents',
  templateUrl: './upload-documents.component.html',
  styleUrls: ['./upload-documents.component.css']
})
export class UploadDocumentsComponent implements OnInit {
  documentsAddedCount: number = 0;
  documentTypes = Object.values(DocumentType);
  selectedDocumentType!: string;

  customer: Customer = new Customer();
  document: Document = new Document();
  customerId: number = JSON.parse(String(localStorage.getItem("user"))).customerId;

  constructor(private uploadDocumentsService: UploadDocumentsService, private router: Router) { }

  ngOnInit(): void { }

  // AADHAR = 'AADHAR',
  // PAN = 'PAN',
  // INCOME = 'INCOME',
  // DEGREE = 'DEGREE',
  // ADDRESS = 'ADDRESS',

  addDocument() {
    console.log(this.document);
    console.log(this.selectedDocumentType);
    switch (this.selectedDocumentType) {
      case "AADHAR":
        this.document.documentType = DocumentType.AADHAR;
        break;

      case "PAN":
        this.document.documentType = DocumentType.PAN;
        break;

      case "INCOME":
        this.document.documentType = DocumentType.INCOME;
        break;

      case "DEGREE":
        this.document.documentType = DocumentType.DEGREE;
        break;

      case "ADDRESS":
        this.document.documentType = DocumentType.ADDRESS;
        break;


    }
    // Call the UploadDocumentsService to add the document
    this.uploadDocumentsService.addDocument(this.document, this.customerId).subscribe({
      next: (response) => {
        console.log("Document Added Successfully", response);
        this.documentsAddedCount++;

        // If all five documents are added, navigate to the Collateral component
        if (this.documentsAddedCount === 5) {
          console.log(this.documentsAddedCount)
          
          this.router.navigate(['/collateral']);
        }
        
      },
      error: (err) => {
        console.error("Adding Document Failed", err);
        alert(err.error.text); // Display the error message to the user
      }
    });
  }
}
// his.router.navigate(['/loan-application']);