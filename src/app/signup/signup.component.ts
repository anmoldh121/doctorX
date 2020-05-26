import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name = ""
  email = "" 
  password = ""
  loadingFlag = false
  constructor(private http: HttpClient, private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  signup() {    
   var values = {
     email: this.email,
     password: this.password,
     role: 'user'
   }

   this.loadingFlag = true
   this.auth.doRegister(values)
   .then(res => {
     this.router.navigate(['/user/'] + res.uid)
   }, err => {
     console.log("error in signup ",err)
   })
  }


}
