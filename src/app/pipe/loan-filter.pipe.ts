import { Pipe, PipeTransform } from '@angular/core';
import { Loan } from '../class/loan';

@Pipe({
  name: 'loanFilter'
})
export class LoanFilterPipe implements PipeTransform {

  transform(loans: Loan[], status: string): Loan[] {
    if (!status || status === 'All') {
      return loans; // Return all loans if no filter is applied
    }

    return loans.filter((loan) => loan.status === status);
  }
}
