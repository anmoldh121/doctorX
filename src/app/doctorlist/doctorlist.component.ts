import { Component, OnInit } from '@angular/core';
import * as faker from 'faker'
@Component({
  selector: 'app-doctorlist',
  templateUrl: './doctorlist.component.html',
  styleUrls: ['./doctorlist.component.css']
})
export class DoctorlistComponent implements OnInit {
doc = []
  constructor() { 
    for(let i=0; i<2; i++) {
      var id = faker.random.number()
      var name = faker.name.findName()
      var phone = faker.phone.phoneNumber()
      var image = faker.image.avatar()
      var address = faker.address.streetAddress() + "," + faker.address.city()
      this.doc[i] = {
        "id": id,
        "name": name,
        "phone": phone,
        "image": image,
        "address": address,
        "rating": 80,
        "price": 100,
        "availability": "Available",
      }
    }
  }

  ngOnInit() {
  }

}
