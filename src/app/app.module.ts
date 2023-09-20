import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { LoanApplicationComponent } from './components/loan-application/loan-application.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { UploadDocumentsComponent } from './components/upload-documents/upload-documents.component';
import { CollateralComponent } from './components/collateral/collateral.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { EMICalculatorComponent } from './components/emicalculator/emicalculator.component';
import { InlineEditingOneComponent } from './components/inline-editing-one/inline-editing-one.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { FaqComponent } from './components/faq/faq.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { LoanFilterPipe } from './pipe/loan-filter.pipe';
import { BankLoginComponent } from './components/bank-login/bank-login.component';
import { BankapprovedloansComponent } from './components/bankapprovedloans/bankapprovedloans.component';
import { BankdashboardComponent } from './components/bankdashboard/bankdashboard.component';
import { LoanaccountComponent } from './components/loanaccount/loanaccount.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { LoanDetailsComponent } from './components/loan-details/loan-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    LoanApplicationComponent,
    AdminLoginComponent,
    UploadDocumentsComponent,
    CollateralComponent,
    HomepageComponent,
    EMICalculatorComponent,
    InlineEditingOneComponent,
    UserProfileComponent,
    FaqComponent,
    AdminDashboardComponent,
    LoanFilterPipe,
    BankLoginComponent,
    BankapprovedloansComponent,
    BankdashboardComponent,
    LoanaccountComponent,
    CustomerDetailsComponent,
    LoanDetailsComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
