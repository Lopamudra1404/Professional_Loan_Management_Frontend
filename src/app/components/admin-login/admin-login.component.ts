import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/class/admin';
import { AdminLoginService } from 'src/app/services/admin-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  admin:Admin = new Admin("", "");
 
  constructor(private adminLoginService: AdminLoginService, private router: Router) { }

  ngOnInit(): void {
  }
  adminLogin() {
   
    this.adminLoginService.login(this.admin).subscribe({
      next:(data) => {
        console.log("Login successfully");
        console.log(data)
        localStorage.setItem("user" , JSON.stringify(data))
        this.router.navigate(['/admin-dashboard']);
      },
      error:(err) => {
        console.error("Login failed", err);
        {alert(err.error.message)}
        // {alert("Login failed")}
      }
    })
  }
}
 


