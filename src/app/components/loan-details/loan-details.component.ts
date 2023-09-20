import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Loan } from 'src/app/class/loan';
import { AdminService } from 'src/app/services/admin.service';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.css']
})
export class LoanDetailsComponent implements OnInit {
  selectedStatus: string = 'All';
  loans: Loan[] = [];

  constructor(private loanService: LoanService,private adminService:AdminService, private router: Router) { }

  ngOnInit(): void {
    this.fetchLoans();
  }
  fetchLoans() {
    this.loanService.getAllLoans().subscribe({
      next: (data) => {
        this.loans = data;
      },
      error: (err) => {
        console.log(err)
      }

    }
    );

  }

}
