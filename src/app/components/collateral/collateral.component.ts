import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Collateral } from 'src/app/class/collateral';
import { Loan } from 'src/app/class/loan';
import { LoanType } from 'src/app/class/loan-type.enum';
import { CollateralService } from 'src/app/services/collateral.service';

@Component({
  selector: 'app-collateral',
  templateUrl: './collateral.component.html',
  styleUrls: ['./collateral.component.css']
})
export class CollateralComponent implements OnInit {

  loan: Loan = new Loan(0,LoanType.CA_Loan, "", 0, 0, 0, 0, "", "");

  collateral: Collateral = new Collateral();


  loanId: number = JSON.parse(String(localStorage.getItem("loanId")));



  constructor(private collateralService: CollateralService, private router: Router) { }



  ngOnInit(): void {

  }

  addCollateral() {

    console.log(this.collateral);
    this.collateralService.addCollateral(this.collateral, this.loanId).subscribe({

      next: (response) => {

        console.log('Collateral added successfully:')
        console.log(response)
        this.router.navigate(['/homepage']);

      },

      error: (error) => {

        console.error('Error adding collateral:', error);
        {alert("Collateral not required")}
        this.router.navigate(['/homepage']);


      }

    });

  }

}
