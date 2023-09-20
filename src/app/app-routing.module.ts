import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { LoanApplicationComponent } from './components/loan-application/loan-application.component';
import { UploadDocumentsComponent } from './components/upload-documents/upload-documents.component';
import { CollateralComponent } from './components/collateral/collateral.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { EMICalculatorComponent } from './components/emicalculator/emicalculator.component';
import { InlineEditingOneComponent } from './components/inline-editing-one/inline-editing-one.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { FaqComponent } from './components/faq/faq.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { BankLogin } from './class/bank-login';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { LoanDetailsComponent } from './components/loan-details/loan-details.component';
import { BankapprovedloansComponent } from './components/bankapprovedloans/bankapprovedloans.component';
import { BankdashboardComponent } from './components/bankdashboard/bankdashboard.component';
import { LoanaccountComponent } from './components/loanaccount/loanaccount.component';
import { BankLoginComponent } from './components/bank-login/bank-login.component';

const routes: Routes = [
 { path: '', redirectTo: '/user-login', pathMatch:'full'},
// { path: '', redirectTo: '/homepage', pathMatch:'full'},
 { path: 'user-registration', component:UserRegistrationComponent},
 { path: 'user-login', component: UserLoginComponent},
 { path: 'homepage', component:HomepageComponent},
 {path: 'user-profile', component: UserProfileComponent},
 { path:'inline-editing-one', component:InlineEditingOneComponent},
 { path: 'loan-application', component: LoanApplicationComponent},
 { path: 'upload-documents', component: UploadDocumentsComponent},
 { path: 'collateral', component: CollateralComponent},
 { path: 'emicalculator', component:EMICalculatorComponent},
 { path: 'faq', component:FaqComponent},
 { path: 'admin-login', component:AdminLoginComponent},
 { path: 'admin-dashboard', component: AdminDashboardComponent},
 { path: 'customer-details', component: CustomerDetailsComponent},
 { path: 'loan-details', component: LoanDetailsComponent},
 { path: 'bank-login', component:BankLoginComponent},
 { path: 'bankapprovedloans', component:BankapprovedloansComponent},
 { path: 'bankdashboard', component:BankdashboardComponent},
 { path: 'loanaccount', component:LoanaccountComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
