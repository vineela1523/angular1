import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-t11',
  templateUrl: './t11.component.html',
  styleUrls: ['./t11.component.css']
})
export class T11Component implements OnInit {
  @Input() public parentData;
  constructor() { }

  ngOnInit() {
  }

}
