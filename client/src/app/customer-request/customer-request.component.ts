import { Component, OnInit } from '@angular/core';
import { CustomerregisterService } from '../customerregister.service';


@Component({
  selector: 'app-customer-request',
  templateUrl: './customer-request.component.html',
  styleUrls: ['./customer-request.component.css']
})
export class CustomerRequestComponent implements OnInit {
  public requestData: any;
  constructor(private serviceApi: CustomerregisterService) { }

  onCancel(id) {
    console.log(id);
    const cancelData = { status: "rejected", req_id: id };
    this.serviceApi.cancelRequest(cancelData).subscribe(cancelRes => {
      if (cancelRes) {
        this.getCustomerReq();
      }
    });
  }

  getCustomerReq() {
    this.serviceApi.getRequest().subscribe((res) => {
      if (res) {
        console.log("response", res);
        this.requestData = res;
      }
    })
  }

  ngOnInit() {
    this.getCustomerReq();
  }

}
