import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerregisterService } from '../customerregister.service';

@Component({
  selector: 'app-supervisor',
  templateUrl: './supervisor.component.html',
  styleUrls: ['./supervisor.component.css']
})
export class SupervisorComponent implements OnInit {
  error: boolean;
  constructor(private router: Router, private loginApi: CustomerregisterService) { }
  back() {
    this.router.navigate(['/supervisor']);
  }
  onSubmit(loginData) {
    const superVisorData = { email: loginData.uname, password: loginData.psw, role: "supervisor" }
    console.log("loginData", superVisorData);
    this.loginApi.employeeLogin(superVisorData).subscribe((data) => {
      console.log(data);
      if (data) {
        this.error = false;
        localStorage.setItem("token", JSON.stringify(data));
        this.router.navigate(['/supervisor/dashboard']);
      } else {
        this.error = true;
      }
    });
  }
  ngOnInit() {
  }

}
