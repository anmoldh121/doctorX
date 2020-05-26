import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';
import { Router } from '@angular/router'
import { trigger,transition,state,style,animate } from '@angular/animations'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
doc = []
carouselFlag = true
gridFlag = false
viewButtonFlag1 = true
viewButtonFlag2 = false
  constructor(private router: Router) { 
      if(localStorage.email) {
        var url = "/user/" + localStorage.uid
        this.router.navigate([url])
      }
   }

  ngOnInit() {
  }

}
