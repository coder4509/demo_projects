import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Auth gard
import {
  AuthGardService as AuthGuard
} from './auth-gard.service';

// customer Routes
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerregisterComponent } from './customerregister/customerregister.component';
import { CustomerrequestformComponent } from './customerrequestform/customerrequestform.component'
import { CustomerServiceComponent } from './customer-service/customer-service.component';
import { CustomerReqComponent } from './customer-req/customer-req.component';
import { CustomerRequestComponent } from './customer-request/customer-request.component';


// Admin Routes
import { AdminComponent } from './admin/admin.component';
import { AdminregisterComponent } from './adminregister/adminregister.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component'
import { AppointmentComponent } from './appointment/appointment.component';

// superVis Routes
import { SupervisorComponent } from './supervisor/supervisor.component';
import { SuperRegisterComponent } from './super-register/super-register.component';
import { EmployeedashboardComponent } from './employeedashboard/employeedashboard.component';



const routes: Routes = [

  {
    path: "customer/home", component: HomeComponent, canActivate: [AuthGuard],
    data: {
      expectedRole: 'customer',
      path: 'customer/home'
    }
  },
  {
    path: "admin/dashboard", component: AdmindashboardComponent, canActivate: [AuthGuard],
    data: {
      expectedRole: 'admin',
      path: 'admin/dashboard'
    }
  },
  {
    path: "supervisor/dashboard", component: EmployeedashboardComponent, canActivate: [AuthGuard],
    data: {
      expectedRole: 'supervisor',
      path: 'supervisor/dashboard'
    }
  },
  {
    path: "admin/customerReq", component: CustomerReqComponent, canActivate: [AuthGuard],
    data: {
      expectedRole: 'admin',
      path: 'admin/customerReq'
    }
  },
  {
    path: "admin/appointment", component: AppointmentComponent, canActivate: [AuthGuard],
    data: {
      expectedRole: 'admin',
      path: 'admin/appointment'
    }
  },
  {
    path: "supervisor/register", component: SuperRegisterComponent, canActivate: [AuthGuard],
    data: {
      expectedRole: 'admin',
      path: 'supervisor/register'
    }
  },
  { path: "customer", component: CustomerComponent },
  { path: "customer/register", component: CustomerregisterComponent },
  { path: "admin", component: AdminComponent },
  { path: "admin/register", component: AdminregisterComponent },
  { path: "supervisor", component: SupervisorComponent },
  { path: "customerRequestform", component: CustomerrequestformComponent },
  {
    path: "customer/customerService", component: CustomerServiceComponent, canActivate: [AuthGuard],
    data: {
      expectedRole: 'customer',
      path: "customer/customerService",
    },
  },
  {
    path: "customer/myRequests", component: CustomerRequestComponent, canActivate: [AuthGuard],
    data: {
      expectedRole: 'customer',
      path: "customer/myRequests"
    }
  },
  { path: '**', redirectTo: 'customer' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
