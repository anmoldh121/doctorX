import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navcard',
  templateUrl: './navcard.component.html',
  styleUrls: ['./navcard.component.css']
})
export class NavcardComponent implements OnInit {
@Input() param:string
  constructor() { console.log(this.param) }

  ngOnInit() {
  }

}
