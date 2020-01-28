import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerregisterService } from '../customerregister.service';


class SuperR {
  supname: String;
  contact: number;
  email: String;
  password: String;
}
@Component({
  selector: 'app-super-register',
  templateUrl: './super-register.component.html',
  styleUrls: ['./super-register.component.css']
})
export class SuperRegisterComponent implements OnInit {

  superData = new SuperR();
  constructor(private router: Router, private super_service: CustomerregisterService) { }
  onClickSubmit(data) {
    const supid = Math.floor(Math.random() * 10000);
    data.supid = supid;
    data.role = "supervisor";
    console.log(data);
    this.super_service.supervisorRegister(data);
  }

  backreg() {
    this.router.navigate(['/supervisor']);
  }

  ngOnInit() {
  }

}
