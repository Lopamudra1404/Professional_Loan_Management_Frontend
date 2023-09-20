export class LoanDisbursement{
    loanDisbursementId:number;
    loanDisbursementAmount:number;
    loanDisbursementDescription:string;
    loanDisbursementStatus:string;
    constructor(loanDisbursementId:number,loanDisbursementAmount:number,loanDisbursementDescription:string,loanDisbursementStatus:string){
        this.loanDisbursementId=loanDisbursementId;
        this.loanDisbursementAmount=loanDisbursementAmount;
        this.loanDisbursementDescription=loanDisbursementDescription;
        this.loanDisbursementStatus=loanDisbursementStatus;
    }
}