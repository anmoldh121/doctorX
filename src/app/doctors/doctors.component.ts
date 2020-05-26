import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonserviceService } from '../commonservice.service'
import { AngularFirestore } from '@angular/fire/firestore'
import * as faker from 'faker'
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  customerData = []
  searchText = ''
  doctor = []
  doctorx = []
  loadingFlag = true
  constructor(private commonservice: CommonserviceService, private firestore: AngularFirestore, private router:Router) {
    if(!localStorage.email) {
      this.router.navigate(['/login'])
    }
    this.firestore.collection('doctorslist').ref.get().then(res => {
      res.forEach(snap => {
        this.doctorx.push(snap.data())
      })
    }, err => {
      console.log(err)
    })
    for(let i=0; i<=10; i++) {
      var doc = {
        name: faker.name.firstName() + ' ' + faker.name.lastName(),
        phone: faker.phone.phoneNumber(),
        image: faker.image.avatar(),
        city: faker.address.city(),
        speciality: "Dentist"
      }
      this.doctor.push(doc)
    }
    
    this.loadingFlag = false
    console.log(this.doctor)
    console.log(this.doctorx)
   }

  ngOnInit() {
  }
  ngDoCheck() {
    this.searchText = this.commonservice.searchText
    console.log(this.searchText)
  }
  onDoctorClick() {
    
  }

}
