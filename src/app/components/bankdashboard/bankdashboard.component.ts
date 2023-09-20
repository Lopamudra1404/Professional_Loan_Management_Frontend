import { Component, OnInit } from '@angular/core';
import { LoanDisbursement } from 'src/app/class/loan-disbursement';
import { BankService } from 'src/app/services/bank.service';
 
@Component({
  selector: 'app-bankdashboard',
  templateUrl: './bankdashboard.component.html',
  styleUrls: ['./bankdashboard.component.css']
})
export class BankdashboardComponent implements OnInit {
  loadData:boolean=true;
  selectedStatus: string = 'All';
  disbursement: LoanDisbursement[] = [];
  approvedLoans: LoanDisbursement[] = [];
  disbursedLoans: LoanDisbursement[] = [];
 
 

  constructor(private bankService :BankService) { }
 
 
  ngOnInit(): void {
    this.loadAllProductsToComponent();
  
  }
  loadAllProductsToComponent(){
    this.loadData=false;
    this.bankService.getAllDisbursedLoans().
    subscribe(
    {
      next:(data)=>{
        console.log(data);
        this.disbursement=data.sort((a: LoanDisbursement, b: LoanDisbursement) => a.loanDisbursementId - b.loanDisbursementId);
      },
      error:(error)=>{
        console.log(error);
     
      },
      complete() {
        console.log("loades all data");
      },
     
 
    });
}
sortDataByStatus() {
  if (this.selectedStatus === 'All') {
    this.approvedLoans = this.disbursement;
  } else {
    this.approvedLoans = this.disbursement.filter(
      (loan) => loan.loanDisbursementStatus === this.selectedStatus
    );
  }
 
}
}
 