import { Component, OnInit } from '@angular/core';
import { CustomerregisterService } from '../customerregister.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeedashboard',
  templateUrl: './employeedashboard.component.html',
  styleUrls: ['./employeedashboard.component.css']
})
export class EmployeedashboardComponent implements OnInit {

  public data: any;
  public comData: any;
  model: string = "";
  modelno: string = "";
  engintype: string = "";
  rcno: string = "";
  avale: any;
  status: string = ""
  public supid = ""
  public comReqId = "";
  public comSupId = "";

  rejectDg = "0deg"
  totalReject = 0;
  rejectRData: any;

  completeDg = "0deg"
  totalComplete = 0;
  completeRData: any;

  constructor(private cust_service: CustomerregisterService, private router: Router) { }

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

  getNewData() {
    const userData = localStorage.getItem("token");
    if (userData) {
      const currentUser = JSON.parse(userData);
      const { result } = currentUser;
      this.supid = result[0].supid;
    }
    const supData = { sup_id: this.supid, status: "accepted" }
    console.log(supData);
    this.cust_service.getDataReqSup(supData).subscribe((res) => {
      console.log(res);
      this.data = res;
    });
  }

  getCompletedData() {
    const userData = localStorage.getItem("token");
    if (userData) {
      const currentUser = JSON.parse(userData);
      const { result } = currentUser;
      this.supid = result[0].supid;
    }
    const supData = { sup_id: this.supid, status: "completed" }
    console.log(supData);
    this.cust_service.getDataReqSup(supData).subscribe((res) => {
      console.log(res);
      this.comData = res;
    });
  }
  // end

  onClickSubmit() {
    const data = { sup_id: this.comSupId, req_id: this.comReqId, status: "completed" }
    this.cust_service.completeAppointment(data).subscribe(res => {
      if (res) {
        this.comReqId = "";
        this.comSupId = "";
        this.getNewData();
        this.getCompletedData();
      }
    })
  }

  onClickCancel() {
    const data = { sup_id: this.comSupId, req_id: this.comReqId }
    this.cust_service.cancelAppointment(data).subscribe(res => {
      if (res) {
        this.comReqId = "";
        this.comSupId = "";
        this.getNewData();
        this.getCompletedData();
      }
    })
  }

  completeApp(reqId, supId) {
    this.comReqId = reqId;
    this.comSupId = supId;
    console.log(this.comReqId, this.comSupId);
  }

  cancelApp(reqId, supId) {
    this.comReqId = reqId;
    this.comSupId = supId;
    console.log(this.comReqId, this.comSupId);
  }

  onLogout() {
    localStorage.clear();
    this.router.navigate(['/admin'])
  }

  getAcceptedCount() {
    const userData = localStorage.getItem("token");
    const dataCount = { status: "accepted", role: "supervisor", assignedTo: false };
    if (userData) {
      const currentUser = JSON.parse(userData);
      const { result } = currentUser;
      dataCount.assignedTo = result[0].supid.toString();
    }
    this.cust_service.newRequestCount(dataCount).subscribe(res => {
      if (res) {
        this.rejectRData = res;
        this.rejectDg = this.rejectRData.length + "deg";
        this.totalReject = this.rejectRData.length;
      }
    })
  }

  getCompletedCount() {
    const userData = localStorage.getItem("token");
    const dataCount = { status: "completed", role: "supervisor", assignedTo: false };
    if (userData) {
      const currentUser = JSON.parse(userData);
      const { result } = currentUser;
      dataCount.assignedTo = result[0].supid.toString();
    }
    this.cust_service.newRequestCount(dataCount).subscribe(res => {
      if (res) {
        this.completeRData = res;
        this.completeDg = this.completeRData.length + "deg";
        this.totalComplete = this.completeRData.length;
      }
    })
  }

  ngOnInit() {
    this.getNewData();
    this.getCompletedData();
    this.getAcceptedCount();
    this.getCompletedCount();
  }

}




