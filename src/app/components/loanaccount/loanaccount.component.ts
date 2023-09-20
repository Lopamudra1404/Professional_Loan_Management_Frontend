import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoanAccount } from 'src/app/class/loan-account';
import { BankService } from 'src/app/services/bank.service';
 
@Component({
  selector: 'app-loanaccount',
  templateUrl: './loanaccount.component.html',
  styleUrls: ['./loanaccount.component.css']
})
export class LoanaccountComponent implements OnInit {
  loadData:boolean=true;
  loanaccount: LoanAccount[] = [];
 
  constructor(private bankService:BankService,private router: Router) { }
 
  ngOnInit(): void {
    this.loadAllProductsToComponent();
  }
  loadAllProductsToComponent(){
    this.loadData=false;
    this.bankService.getAllAccounts().
    subscribe(
    {
      next:(data)=>{
        console.log(data);
        this.loanaccount=data;
      },
      error:(error)=>{
        console.log(error);
     
      },
      complete() {
        console.log("loades all data");
      },
     
 
    });
}
 

}
 