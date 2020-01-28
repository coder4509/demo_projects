import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CustomerregisterService } from './customerregister.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { SupervisorComponent } from './supervisor/supervisor.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerregisterComponent } from './customerregister/customerregister.component';

import { SuperRegisterComponent } from './super-register/super-register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminregisterComponent } from './adminregister/adminregister.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';

import { EmployeedashboardComponent } from './employeedashboard/employeedashboard.component';

import { CustomerReqComponent } from './customer-req/customer-req.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { HomeComponent } from './home/home.component';
import { CustomerrequestformComponent } from './customerrequestform/customerrequestform.component';
import { CustomerServiceComponent } from './customer-service/customer-service.component';
import { DecodeTokenService } from './decode-token.service';
import { CustomerRequestComponent } from './customer-request/customer-request.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    SupervisorComponent,
    CustomerComponent,
    CustomerregisterComponent,
    SuperRegisterComponent,
    AdminregisterComponent,
    AdmindashboardComponent,
    CustomerReqComponent,
    AppointmentComponent,
    HomeComponent,
    CustomerrequestformComponent,
    CustomerServiceComponent,
    CustomerRequestComponent,
    EmployeedashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

  ],
  providers: [CustomerregisterService, DecodeTokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
