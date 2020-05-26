import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const URL =  'http://localhost:5000/api/login'

@Component({
  selector: 'app-doctorlogin',
  templateUrl: './doctorlogin.component.html',
  styleUrls: ['./doctorlogin.component.css']
})
export class DoctorloginComponent implements OnInit {
email = null
password = null
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  login() {
    var request = {
      email: this.email,
      password: this.password
    }

    this.http.post(URL, request).subscribe((response)=>{
      console.log("login success, response =>  ",response)
    },(err)=>{
      console.log("error in login ",err)
    })
  }
}
