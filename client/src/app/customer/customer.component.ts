import { Component, OnInit } from '@angular/core';
import { CustomerregisterService } from '../customerregister.service';
import { Router } from '@angular/router';

class customer {
  email: String;
  password: String;
}
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  user = new customer();
  error: boolean;
  constructor(private router: Router, private cust_service: CustomerregisterService) { }
  back() {

    this.router.navigate(['/admin']);
  }
  onClickSubmit(dataLogin) {
    dataLogin.role = "customer";
    this.cust_service.customerLogin(dataLogin).subscribe((data) => {
      console.log(data);
      if (data) {
        this.error = false;
        localStorage.setItem("token", JSON.stringify(data));
        this.router.navigate(['/customer/home']);
      } else {
        this.error = true;
      }
    });
  }

  ngOnInit() {

  }

}
