import { Component, OnInit } from '@angular/core';
import { LoanCalculator } from 'src/app/class/loan-calculator';
import { LoanCalculatorResult } from 'src/app/class/loan-calculator-result';
import { EMIService } from 'src/app/services/emi.service';

@Component({
  selector: 'app-emicalculator',
  templateUrl: './emicalculator.component.html',
  styleUrls: ['./emicalculator.component.css']
})
export class EMICalculatorComponent implements OnInit {

  constructor(private emiService: EMIService) { }

  ngOnInit(): void {
  }

  loanCalculatorDto: LoanCalculator = new LoanCalculator(); // Initialize with default values
  loanCalculatorResult: LoanCalculatorResult = new LoanCalculatorResult()

  calculateLoan() {
    this.emiService.calculateEMI(this.loanCalculatorDto).subscribe(
      (result: LoanCalculatorResult) => {
        // Handle the result from the backend here
        console.log(result);
        this.loanCalculatorResult = result; // Store the result
       
      },
      (error) => {
        console.error('Error calculating loan:', error);
      }
    );
  }
}
