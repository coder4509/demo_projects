import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DecodeTokenService } from './decode-token.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class CustomerregisterService {
  cities: [] = [];
  public tokenData = localStorage.getItem("token") && JSON.parse(localStorage.getItem("token")) || "";
  public headers = new HttpHeaders({
    "Authorization": `${this.tokenData.token}`
  });
  public options = { headers: this.headers };

  constructor(private httpClient: HttpClient, private decodeData: DecodeTokenService, private router: Router) { }

  public tokenDecode = this.decodeData.decodeJWT();

  customerRegister(data) {
    this.httpClient.post("http://localhost:4000/users/car/customer/register", data).
      subscribe((data) => console.log(data));
  }

  customerLogin(data) {
    return this.httpClient.post("http://localhost:4000/users/car/login/customer", data);

  }

  supervisorRegister(data) {
    data.addedBy = "none";
    console.log(this.tokenDecode);
    if (this.tokenDecode) {
      data.addedBy = this.tokenDecode.uId;
    }
    this.httpClient.post("http://localhost:4000/users/car/superviser/register", data).
      subscribe((data) => console.log(data));

  }

  adminRegister(data) {
    this.httpClient.post("http://localhost:4000/users/car/customer/register", data).
      subscribe((data) => console.log(data));
  }

  getData() {
    return this.httpClient.get("http://localhost:4000/users/car/admin/getdata", this.options)
  }
  deleteEmp(id) {
    return this.httpClient.post("http://localhost:4000/users/car/admin/superviserdel", { supid: id }, this.options);
  }
  getDatabyid(id) {
    return this.httpClient.get("http://localhost:4000/users/car/admin/getdata/" + id, this.options);
  }
  updateEmp(data) {
    return this.httpClient.post("http://localhost:4000/users/car/admin/superviserup", data, this.options);
  }

  // custreq

  getDatareq() {
    return this.httpClient.get("http://localhost:4000/users/car/admin/getdatareq", this.options)
  }
  // end

  // custreq

  getDataReqSup(data) {
    return this.httpClient.post("http://localhost:4000/users/car/supervisor/getdatareq", data, this.options)
  }
  // end

  getDatarequest(id) {
    return this.httpClient.get("http://localhost:4000/users/car/admin/getreqdetails/" + id, this.options)
  }

  getAvalEmp() {
    return this.httpClient.get("http://localhost:4000/users/car/admin/avalEmp/" + this.tokenDecode.uId, this.options);
  }

  getAppointment() {
    return this.httpClient.get("http://localhost:4000/users/car/admin/appointment/list/" + this.tokenDecode.uId, this.options);
  }

  customerRegisterform(data) {
    this.httpClient.post("http://localhost:4000/users/car/customer/request", data).
      subscribe((data) => console.log(data));
  }

  customerServiceRequest(data) {
    data.cust_id = this.tokenDecode.uId;
    this.httpClient.post("http://localhost:4000/users/car/customer/service/request", data, this.options
    ).
      subscribe((data) => { console.log(data); this.router.navigate(["customer/home"]) });
  }

  cancelRequest(data) {
    data.cust_name = this.tokenDecode.uId;
    return this.httpClient.post("http://localhost:4000/users/car/requests", data, this.options
    )
  }

  getRequest() {
    return this.httpClient.get("http://localhost:4000/users/car/customer/requests/" + this.tokenDecode.uId, this.options)
  }

  // employee login
  employeeLogin(empData) {
    return this.httpClient.post("http://localhost:4000/users/car/login/employee", empData);
  }

  // assign to
  assignTo(data) {
    data.assignedBy = this.tokenDecode.uId;
    return this.httpClient.post("http://localhost:4000/users/car/admin/appointment", data, this.options);
  }

  // download invoice

  getAppointmentInfo(data) {
    data.assignedBy = this.tokenDecode.uId;
    return this.httpClient.post("http://localhost:4000/users/car/admin/appointment/info", data, this.options);
  }

  // complete Appointment

  completeAppointment(data) {
    return this.httpClient.post("http://localhost:4000/users/car/supervisor/appointment", data, this.options);
  }
  cancelAppointment(data) {
    data.sup_name = this.tokenDecode.uId;
    return this.httpClient.post("http://localhost:4000/users/car/supervisor/appointment/cancel", data, this.options);
  }


  newRequestCount(data) {
    return this.httpClient.post("http://localhost:4000/users/car/requests/count/" + data.role, data, this.options);
  }

}

