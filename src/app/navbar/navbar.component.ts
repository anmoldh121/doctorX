import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
navClass:Number = -100
toggleBar = true
crossBar = false
logoutFlag = false
loginFlag = true
dropdown = false
  constructor(private router: Router, private authService: AuthService) {
    if(localStorage.userName && localStorage.email) {
      this.logoutFlag = true
      this.loginFlag = false
    }
   }

  ngOnInit() {
  }

  ngDoCheck() {
    if(localStorage.email) {
      this.logoutFlag = true
      this.loginFlag = false
    }
  }
  bars() {
    this.navClass = 0
    if(this.toggleBar == true && this.crossBar == false) {
      this.toggleBar = false
      this.crossBar = true 
    }
    else {
      this.toggleBar = true
      this.crossBar = false
      this.navClass = -100
    }
  }
  logout() {
    this.dropdown = false
    localStorage.clear()
    this.logoutFlag = false
    this.loginFlag = true
    this.authService.doLogOut()
    this.navClass = -100
    this.router.navigate(['/'])
  }
  home() {
    if(localStorage.email) {
      var url = "/user/" + localStorage.uid
      this.router.navigate([url])
    }
    else {
      this.router.navigate(['/'])
    }
  }
  login() {
    this.navClass = -100
    this.router.navigate(['/login'])
    this.toggleBar = true
    this.crossBar = false
  }
  onProfileClick() {
    if(this.dropdown) {
      this.dropdown = false
    }
    else {
      this.dropdown = true
    }
  }
  onDoctorsClick() {
    this.navClass = -100
    this.toggleBar = true
    this.crossBar = false
    this.router.navigate(['/doctors'])
  }

}
