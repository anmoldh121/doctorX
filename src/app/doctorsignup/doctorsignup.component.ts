import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AuthService } from '../auth.service'


@Component({
  selector: 'app-doctorsignup',
  templateUrl: './doctorsignup.component.html',
  styleUrls: ['./doctorsignup.component.css']
})
export class DoctorsignupComponent implements OnInit {
name = null
email = null
password = null

  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit() {
  }

  signup() {
    console.log("it works")
    var values = {
      email: this.email,
      password: this.password,
      role: 'doctor'
    }
    this.authService.doRegister(values).then(res => {
      console.log(res)
      if(res.role == 'doctor') {
        console.log("login success")
      }
    }, err => {
      console.log("error ",err)
    })
  }

}
