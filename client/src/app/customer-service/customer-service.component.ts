import { Component, OnInit } from '@angular/core';
import { CustomerregisterService } from '../customerregister.service';
import { DecodeTokenService } from '../decode-token.service';


@Component({
  selector: 'app-customer-service',
  templateUrl: './customer-service.component.html',
  styleUrls: ['./customer-service.component.css']
})
export class CustomerServiceComponent implements OnInit {

  public cname = "";
  constructor(private cust_services1: CustomerregisterService, private decodeT: DecodeTokenService) { }
  ngOnInit() {
    const userData = this.decodeT.decodeJWT();
    this.cname = userData.uId;
  }

  onClickSubmit(data) {
    data.cust_name = this.cname;
    this.cust_services1.customerServiceRequest(data);
  }

}
