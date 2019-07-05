import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t10',
  templateUrl: './t10.component.html',
  styleUrls: ['./t10.component.css']
})
export class T10Component implements OnInit {
  public message = '';
  constructor() { }

  ngOnInit() {
  }
  myMessage(value){
    this.message = value;
  }

}
