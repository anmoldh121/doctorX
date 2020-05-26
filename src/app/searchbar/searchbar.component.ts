import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../commonservice.service' 

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  iconFlag = true
  search 

  constructor(private commonservice: CommonserviceService) {  }
  change(event) {
    var input = event.target.value
    if(input) {
      this.iconFlag = false
    }
    else {
      this.iconFlag = true
    }
    this.search = input
    this.commonservice.searchText = input    
  }
  ngOnInit() {

  }

}
