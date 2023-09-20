import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Loan } from 'src/app/class/loan';
import { LoanService } from 'src/app/services/loan.service';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  
  selectedStatus: string = 'All'; // Default to 'All' to show all loans
  isDropdownOpen = false;
  loans: Loan[] = [];

  constructor(private loanService: LoanService,private adminService:AdminService, private router: Router) { }

  ngOnInit(): void {
    this.fetchLoans();
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  logout() {
    this.router.navigate(['/user-login']);
  }
  fetchLoans() {
    this.loanService.getAllLoans().subscribe({
      next: (data) => {
        this.loans = data.filter((loan) => loan.status.toLowerCase() === 'pending');
      },
      error: (err) => {
        console.log(err)
      }

    }
    );

  }
//   approveLoan(loanId: number): void {
//     this.adminService.approveLoan(loanId).subscribe({
//       next: (response) => {
//         // Handle the response from the backend (e.g., show a success message)
//         console.log(`Loan ${loanId} approved successfully`, response);
//         alert(response.text)
//       },
//       error: (error) => {
//         // Handle any errors (e.g., show an error message)
//         console.error(`Error approving loan ${loanId}`, error);
//         alert(error.text);
//       }
//     });
//   }
// }  
approveLoan(loanId: number): void {
  this.adminService.approveLoan(loanId).subscribe({
    next: (response) => {
      const loanIndex = this.loans.findIndex((loan) => loan.loanId === loanId);

      if (loanIndex !== -1) {
        // Update the status of the loan in the loans array
        this.loans[loanIndex].status = response.status;

        console.log(`Loan ${loanId} ${response.status}`, response);
        alert(`Loan ${response.status}`);
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/admin-dashboard']);
        });
      } else {
        console.error(`Loan ${loanId} not found in the loans array`);
        alert('An unexpected error occurred');
      }
    },
    error: (error) => {
      console.error(`Error approving loan ${loanId}`, error);
      alert('An error occurred while processing the loan');
    }
  });
}
}
