import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/class/customer';
import { LoanType } from 'src/app/class/loan-type.enum';
import { LoanApplicationService } from 'src/app/services/loan-application.service';
import { Loan } from 'src/app/class/loan';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-application',
  templateUrl: './loan-application.component.html',
  styleUrls: ['./loan-application.component.css']
})
export class LoanApplicationComponent implements OnInit {

  loanTypes = Object.values(LoanType);
  selectedLoanType!: string;


  customer: Customer = new Customer();
  customerId: number = JSON.parse(String(localStorage.getItem("user"))).customerId;
  loan: Loan = new Loan(0,LoanType.CA_Loan, "", 0, 0, 0, 0, "", "");

  constructor(private loanApplicationService: LoanApplicationService, private router: Router) { }

  ngOnInit(): void {
  }

  applyForLoan() {
    console.log(this.loan);
    console.log(this.customer);
    switch (this.selectedLoanType) {
      case "DOCTOR_Loan":
        this.loan.loanType = LoanType.DOCTOR_Loan;
        break;

      case "CA_Loan":
        this.loan.loanType = LoanType.CA_Loan;
        break;

      case "CS_Loan":
        this.loan.loanType = LoanType.CS_Loan;
        break;

      case "ARCHITECT_Loan":
        this.loan.loanType = LoanType.ARCHITECT_Loan;
        break;

      case "ENGINEER_Loan":
        this.loan.loanType = LoanType.ENGINEER_Loan;
        break;

      case "LAWYER_Loan":
        this.loan.loanType = LoanType.LAWYER_Loan;
        break;


    }
    this.loanApplicationService.apply(this.loan, this.customerId).subscribe({
      next: (response) => {
        console.log("Applied Successfully", response);
        console.log(response.loanId)
        localStorage.setItem("loanId", response.loanId);
        this.router.navigate(['/upload-documents']);
      },
      error: (err) => {
        console.error("Application Failed");
        { alert(err.error.text) }
      }
    })

  }
}


