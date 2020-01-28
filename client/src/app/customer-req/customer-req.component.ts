import { Component, OnInit, ElementRef } from '@angular/core';
import { CustomerregisterService } from '../customerregister.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customer-req',
  templateUrl: './customer-req.component.html',
  styleUrls: ['./customer-req.component.css']
})
export class CustomerReqComponent implements OnInit {

  public data: any;
  model: string = "";
  modelno: string = "";
  engintype: string = "";
  rcno: string = "";
  avale: any;
  status: string = ""

  public reqId = "";
  public empId = "";

  constructor(private router: Router, private cust_service: CustomerregisterService, private elm: ElementRef) { }

  ngOnInit() {
    this.getData();
    this.availableEmp();
  }

  onClickSubmit(data) {
    data.req_id = this.reqId;
    data.sup_id = this.empId;
    console.log("hhhh", data);
    this.cust_service.assignTo(data).subscribe(res => {
      if (res) {
        console.log("res", res);
        this.reqId = "";
        this.empId = "";
        this.getData();
        this.availableEmp();
      }
    })
  }

  cancelRequest(id) {
    console.log(id);
    this.reqId = id;
  }

  changeSup(event) {
    const that = event;
    this.empId = that.selectedOptions[0].id;
    console.log(this.empId);
  }

  confirmCancel() {
    const cancelData = { status: "rejected", req_id: this.reqId };
    this.cust_service.cancelRequest(cancelData).subscribe(cancelRes => {
      if (cancelRes) {
        this.reqId = "";
        this.getData();
        this.availableEmp();
      }
    });
    this.reqId = ""
  }

  assignEmp(itemId) {
    this.reqId = itemId;
    console.log("elm", this.elm)
  }

  getData() {
    this.cust_service.getDatareq().subscribe((res) => {
      console.log(res);
      this.data = res;
    });
  }
  detail(reqid) {
    console.log(reqid);
    this.cust_service.getDatarequest(reqid).
      subscribe((res) => {
        console.log(res);
        this.model = res[0].model;
        this.modelno = res[0].modelno;
        this.engintype = res[0].engintype;
        this.rcno = res[0].rcno;
        this.status = res[0].status;
      });
  }
  availableEmp() {
    this.cust_service.getAvalEmp().
      subscribe((res) => {
        console.log(res);
        this.avale = res;
      })
  }
  onLogout() {
    localStorage.clear();
  }
}
