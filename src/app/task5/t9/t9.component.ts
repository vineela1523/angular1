import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-t9',
  templateUrl: './t9.component.html',
  styleUrls: ['./t9.component.css']
})
export class T9Component implements OnInit {
  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  displayMe(value){
    this.childEvent.emit(value);
  }

}
