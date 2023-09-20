import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/class/customer';
import { UserLoginService } from 'src/app/services/user-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  customer:Customer = new Customer();
  isAdminLogin: boolean = false;

  constructor(private userLoginService: UserLoginService, private router:Router) { }

  ngOnInit(): void {}

  userLogin() {
    if (!this.isFormValid()) {
      return;
    }
    this.userLoginService.login(this.customer).subscribe({
      next:(data)=> {
        console.log("Login Succesful");
        console.log(data)
        localStorage.setItem("user" , JSON.stringify(data))
        this.router.navigate(['/homepage']);
      },
      error:(err)=> {
        console.error("failed");
        // {alert(err.error)}
        {alert("Login failed")}
      }
    });
  }

    private isFormValid(): boolean {
      // Implement custom form validation logic here
      // Return true if the form is valid, otherwise false
  
      if (!this.customer.customerEmail || !this.customer.customerPassword){
        // You can display additional error messages or styles here if needed
        return false;
      }
  
      return true;
    }


}
