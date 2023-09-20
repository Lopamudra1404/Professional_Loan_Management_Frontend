import { Component, OnInit } from '@angular/core';
import { Loan } from 'src/app/class/loan';
import { LoanService } from 'src/app/services/loan.service';
import { BankService } from 'src/app/services/bank.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-bankapprovedloans',
  templateUrl: './bankapprovedloans.component.html',
  styleUrls: ['./bankapprovedloans.component.css']
})
export class BankapprovedloansComponent implements OnInit {
 
  isButtonDisabled = false;
  loadData:boolean=true;
  loan: Loan[] = [];
   generatedLoanAccountIds: number[] = [];
 
  constructor(private loanService: LoanService, private bankService:BankService,private router: Router) { }
 
  ngOnInit(): void {
    //this.refreshPage();
    this.fetchLoans();
  }
  // refreshPage() {
  //   const currentUrl = this.router.url;
  //   this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
  //     this.router.navigate([currentUrl]);
  //   });
  // }
  // fetchLoans() {
  //   this.loanService.getApprovedLoans().subscribe({
  //     next: (data) => {
  //       this.loan = data;
  //       console.log(data);
  //     },
  //     error: (err) => {
  //       console.log(err)
  //     }
  //   }
  //   );
  // }
  fetchLoans() {
    //this.loadData=false;
    this.bankService.getApprovedAndAccountGeneratedLoans().subscribe({
      next: (data) => {
        this.loan = data.sort((a: Loan, b: Loan) => a.loanId - b.loanId);
        console.log(data);
      },
      error: (err) => {
        console.log(err)
      },
      complete() {
        console.log("loades all data");
      },
 
    }
    );
  }
  generateLoanAccount(loanId: number) {
    this.isButtonDisabled = true; // Disable the button when clicked
    this.bankService.generateLoanAccount(loanId).subscribe({
        next: (response) => {
            console.log("loan account created successfully", response);
            console.log(response);
            this.fetchLoans();
 
            // Display the response message
            alert(response.message);
        },
        error: (err) => {
            console.error('Error generating loan account:', err);
            alert( err.error); // Display the error message
        },
        complete: () => {
            this.isButtonDisabled = false; // Re-enable the button after the request is complete
        }
    });
}
disburseLoanByLoanId(loanId: number) {
  this.isButtonDisabled = true; // Disable the button when clicked
  this.bankService.disburseLoanByLoanId(loanId).subscribe({
      next: (response) => {
          console.log("loan disbursed successfully", response);
          this.fetchLoans();
          // Display the response message
           // Run change detection within NgZone
    
          alert(response.message);
      },
      error: (err) => {
          console.error('Error disbursing:', err);
          alert( err.error); // Display the error message
      },
      complete: () => {
          this.isButtonDisabled = false; // Re-enable the button after the request is complete
      }
  });
}
}
 