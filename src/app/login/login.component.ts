import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Email = ''
  Password = ''

  //LoadingFlag is used to on and off loader
  LoadingFlag = false
  constructor(private http: HttpClient, private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }
  login() {
    let values = {
      email: this.Email,
      password: this.Password
    }

    //Turning loader On

    this.LoadingFlag = true
    this.auth.doLogin(values)
    .then((res) => {
      console.log(res)
      if(res.role == 'user') {
        console.log("login success") 
        this.router.navigate(['/user/' + res.uid])
      }
    },err => {
      console.log("error ",err)
    })
  }

}
