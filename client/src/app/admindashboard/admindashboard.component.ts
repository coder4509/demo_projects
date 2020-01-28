import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerregisterService } from '../customerregister.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  public data: any;
  public empid: any;
  supname: string;
  email: string;
  contact: string;

  empDg = "0deg";
  totalEmp = 0;

  newDg = "0deg"
  totalNew = 0;
  newRData: any;

  acceptDg = "0deg"
  totalAccept = 0;
  acceptRData: any;

  rejectDg = "0deg"
  totalReject = 0;
  rejectRData: any;

  completeDg = "0deg"
  totalComplete = 0;
  completeRData: any;

  constructor(private cust_service: CustomerregisterService, private router: Router) {

  }

  delete(id) {
    this.empid = id;
  }
  edituser(id) {
    this.cust_service.getDatabyid(id).subscribe((res) => {
      this.empid = id;
      this.supname = res[0].supname;
      this.email = res[0].email;
      this.contact = res[0].contact;
    });
  }

  clear() {
    this.empid = "";
  }
  // getAll emp
  getEmp() {
    this.cust_service.getData().subscribe((res) => {
      this.data = res;
      this.empDg = this.data.length + "deg";
      this.totalEmp = this.data.length;
    });
  }
  // end
  deleteEmp() {
    if (this.empid != "" && this.empid != undefined && this.empid != null) {
      this.cust_service.deleteEmp(this.empid).
        subscribe((data) => {
          if (data) {
            this.getEmp();
          }
        });
    }
  }
  onClickSubmit(data) {
    if (this.empid != "" && this.empid != undefined && this.empid != null) {
      data.supid = this.empid;
      this.cust_service.updateEmp(data).
        subscribe((data) => {
          if (data) {
            this.getEmp();
          }
        });
    }
  }

  onLogout() {
    localStorage.clear();
  }

  getNewRequestCount() {
    const dataCount = { status: "pending", role: "admin" };
    this.cust_service.newRequestCount(dataCount).subscribe(res => {
      if (res) {
        this.newRData = res;
        this.newDg = this.newRData.length + "deg";
        this.totalNew = this.newRData.length;
      }
    })
  }

  getAcceptedCount() {
    const dataCount = { status: "accepted", role: "admin" };
    this.cust_service.newRequestCount(dataCount).subscribe(res => {
      if (res) {
        this.acceptRData = res;
        this.acceptDg = this.acceptRData.length + "deg";
        this.totalAccept = this.acceptRData.length;
      }
    })
  }

  getRejectedCount() {
    const dataCount = { status: "rejected", role: "admin" };
    this.cust_service.newRequestCount(dataCount).subscribe(res => {
      if (res) {
        this.rejectRData = res;
        this.rejectDg = this.rejectRData.length + "deg";
        this.totalReject = this.rejectRData.length;
      }
    })
  }

  getCompletedCount() {
    const dataCount = { status: "completed", role: "admin" };
    this.cust_service.newRequestCount(dataCount).subscribe(res => {
      if (res) {
        this.completeRData = res;
        this.completeDg = this.completeRData.length + "deg";
        this.totalComplete = this.completeRData.length;
      }
    })
  }

  ngOnInit() {
    this.getEmp();
    this.getNewRequestCount();
    this.getAcceptedCount();
    this.getRejectedCount();
    this.getCompletedCount();
  }

}




