import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerregisterService } from '../customerregister.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  error = false;
  constructor(private router: Router, private loginApi: CustomerregisterService) { }
  back() {
    this.router.navigate(['/customer']);
  }

  onSubmit(loginData) {
    const adminData = { email: loginData.uname, password: loginData.psw, role: "admin" }
    console.log("loginData", adminData);
    this.loginApi.employeeLogin(adminData).subscribe((data) => {
      console.log(data);
      if (data) {
        this.error = false;
        localStorage.setItem("token", JSON.stringify(data));
        this.router.navigate(['/admin/dashboard']);
      } else {
        this.error = true;
      }
    });
  }
  ngOnInit() {
  }


}
