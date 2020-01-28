import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CustomerregisterService } from '../customerregister.service';
import * as jsPDF from 'jspdf';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  public data: any;
  public reqId = "";
  public invoiceData: any;
  public isShow = false;
  @ViewChild('content', { static: false }) content: ElementRef;

  constructor(private cust_service: CustomerregisterService, private router: Router) { }
  ngOnInit() {
    this.getData();
  }


  confirmDownload() {
    let doc = new jsPDF({
      unit: 'mm',
    });
    const pdfName = Date.now() + Math.random();
    doc.addHTML(this.content.nativeElement, function () {
      doc.save("invoice_" + pdfName + ".pdf");
    });

  }

  closeInvoice() {
    this.isShow = false;
  }

  downloadInvoice(id) {
    console.log("id", id);
    this.isShow = true;
    const reqData = { req_id: id }
    this.cust_service.getAppointmentInfo(reqData).subscribe(res => {
      if (res) {
        console.log("jjj", res)
        this.invoiceData = res;
      }
    })
  }

  getData() {
    this.cust_service.getAppointment().subscribe((res) => {
      console.log(res);
      this.data = res;
    });
  }

  onLogout() {
    localStorage.clear();
  }

}
