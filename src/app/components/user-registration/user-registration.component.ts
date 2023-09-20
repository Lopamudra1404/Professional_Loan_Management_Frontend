import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/class/customer';
import { UserRegistrationService } from 'src/app/services/user-registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  customer:Customer = new Customer();



  constructor(private userRegistrationService:UserRegistrationService, private router:Router) { }

  ngOnInit(): void {
  }
  userRegister() {
    this.userRegistrationService.register(this.customer).subscribe({
      next:()=> {
        console.log("Registred");
        this.router.navigate(['/user-login']);
      },
      error:(err)=> {
        console.error("Registration failed");
       { alert(err.error.text)}}
    })




}
}

