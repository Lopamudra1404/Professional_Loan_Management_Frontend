export class LoanCalculatorResult {
    constructor(public monthlyPayment?:number,
        public totalAmountPaid?: number,
        public totalInterestPaid?:number
        ) {}
}
