import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-t12',
  templateUrl: './t12.component.html',
  styleUrls: ['./t12.component.css']
})
export class T12Component implements OnInit {
  @Output() public myEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  printMe(value){
    this.myEvent.emit(value);
  }

}
