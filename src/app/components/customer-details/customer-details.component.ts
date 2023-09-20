import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/class/customer';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.fetchCustomers()
  }
  fetchCustomers() {
    this.userService.getAllCustomers().subscribe({
      next: (data) => {
        this.customers = data;
      },
      error: (err) => {
        console.log(err)
      }

    }
    );

}
}
