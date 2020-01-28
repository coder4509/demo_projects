import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CustomerregisterService} from '../customerregister.service';
  
class customerRegister
{
  fname:String;
  lname:String;
  email:String;
  address:String;
  contact_no:number;
  password:String;
}

@Component({
  selector: 'app-customerregister',
  templateUrl: './customerregister.component.html',
  styleUrls: ['./customerregister.component.css']
})
export class CustomerregisterComponent implements OnInit {

  CustomerData = new customerRegister();
  constructor(private router:Router,private cust_service:CustomerregisterService) { }

  
  
  onClickSubmit(data)
  {
    const custid=Math.floor(Math.random() * 10000);
    data.custid=custid;
    console.log(data);
    this.cust_service.customerRegister(data);
  }

  backreg()
  {
    this.router.navigate(['/customer']);
  }
  ngOnInit() {
  }

}
