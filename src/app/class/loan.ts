
import { LoanType } from "./loan-type.enum";

export class Loan {
    constructor(
    //   public customer: Customer,
      public loanId: number,
      public loanType: LoanType, 
      public loanName: string,
      public loanAmount: number,
      public loanIntrest: number,
      public loanTenture: number,
      public loanEMI: number,
      public loanDescription: string,
      public status: string
    ) {}
  }
  

// private Integer loanId;
// private LoanType loanType;
// private String loanName;
// private Double loanAmount;
// private Double loanIntrest;
// private Integer loanTenture;
// private Double loanEMI;
// private String loanDescription;
// private String status;