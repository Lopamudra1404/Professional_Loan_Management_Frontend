import { Component, OnInit } from '@angular/core';
import { BankLogin } from 'src/app/class/bank-login';
import { BankService } from 'src/app/services/bank.service';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-bank-login',
  templateUrl: './bank-login.component.html',
  styleUrls: ['./bank-login.component.css']
})
export class BankLoginComponent implements OnInit {
  bank:BankLogin=new BankLogin("","");
  message:string="";
  errorMessage: string | undefined;
 
  constructor(private bankService :BankService, private router:Router) { }
 

  ngOnInit(): void {
  }
  bankLogin(){
    this.bankService.login(this.bank).subscribe({
      next:(reponse) => {
        console.log("Login successfully")
       alert("Login Successful");
        this.router.navigate(['/bankapprovedloans'])
      },
      error:(err) => {
        console.error("login failed")
        alert(err.error.text)}
    })
 
 

  }
   
}