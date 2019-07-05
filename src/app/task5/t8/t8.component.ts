import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-t8',
  templateUrl: './t8.component.html',
  styleUrls: ['./t8.component.css']
})
export class T8Component implements OnInit {
  @Output() public middleEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  getMessage(value){
    this.middleEvent.emit(value);
  }


}
