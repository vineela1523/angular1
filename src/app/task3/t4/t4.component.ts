import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-t4',
  templateUrl: './t4.component.html',
  styleUrls: ['./t4.component.css']
})
export class T4Component implements OnInit {
  @Input() public parentData;
  constructor() { }

  ngOnInit() {
  }

}
