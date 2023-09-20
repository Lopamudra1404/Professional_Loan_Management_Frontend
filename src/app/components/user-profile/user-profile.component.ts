import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/class/customer';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  loadData:boolean=true;


  customer: Customer = new Customer();


  constructor(private userProfile:UserProfileService,private router:Router) { }

 

  ngOnInit(): void {

    this.loadCustomerData();

  }

  loadCustomerData() {

    const customerId = JSON.parse(String(localStorage.getItem("user"))).customerId;

    const customerIdNumber = parseInt(customerId, 10);

 

    console.log(customerIdNumber);

    this.userProfile.getCustomerById(customerIdNumber).subscribe({

      next: (data) => {

        console.log(data);

        this.customer = data;

        this.loadData = false;

      },

      error: (error) => {

        console.log(error);

      },

      complete() {

        console.log('Loaded all data');

      },

    });

  }

}
