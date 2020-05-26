import { Component, OnInit, Input } from '@angular/core';
import { CommonserviceService } from '../commonservice.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-doctorcard',
  templateUrl: './doctorcard.component.html',
  styleUrls: ['./doctorcard.component.css'],
  
})
export class DoctorcardComponent implements OnInit {
@Input() doctor
searchText
  constructor(public commonservice: CommonserviceService, private router: Router) {
    this.searchText = commonservice.searchText
    console.log(this.doctor)
   }

  ngOnInit() {
  }
  onDocotorClick() {
    this.router.navigate(['/doctor-info/'+ this.doctor.uid])
  }
  

}
