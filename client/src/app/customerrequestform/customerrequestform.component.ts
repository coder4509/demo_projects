import { Component, OnInit } from '@angular/core';
import {CustomerregisterService} from '../customerregister.service';
class customerReg
{
  cname:String;
  city:String;
  date:String;
  time:String;
  cust_service:String;
  modelname:String;
  modelno:String;
  enginetype:String;
  rcno:number;
}
@Component({
  selector: 'app-customerrequestform',
  templateUrl: './customerrequestform.component.html',
  styleUrls: ['./customerrequestform.component.css']
})
export class CustomerrequestformComponent implements OnInit {
  
  custRData =new customerReg();
  constructor(private cust_services:CustomerregisterService) { }

  ngOnInit() {
   
  }

  onClickSubmit(data)
  {
    
    this.cust_services.customerRegisterform(data);
    
  }
}
