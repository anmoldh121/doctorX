import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() result = new EventEmitter()


  constructor() { }

  ngOnInit() {
  }

  sendMessageToParent(message: string) {
    this.result.emit(message)
  }

}
