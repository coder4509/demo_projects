import { Component, OnInit } from '@angular/core';
import {CustomerregisterService} from '../customerregister.service';
import { Router } from '@angular/router';

class AdminR
{
  supname:String;
  contact:number;
  email:String;
  password:String;
}

@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrls: ['./adminregister.component.css']
})
export class AdminregisterComponent implements OnInit {

  userData = new AdminR();

  constructor(private router:Router,private admin_service:CustomerregisterService ) { }
  onClickSubmit(data)
  {
    const supid=Math.floor(Math.random() * 10000);
    data.supid=supid;
    data.role="admin";
    console.log(data);
    this.admin_service.supervisorRegister(data);
  }

  backreg()
  {
    this.router.navigate(['/admin']);
  }

  ngOnInit() {
  }

}
