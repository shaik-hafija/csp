import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flower1',
  templateUrl: './flower1.component.html',
  styleUrls: ['./flower1.component.css']
})
export class Flower1Component implements OnInit {

  constructor() { }
  order=false;
  flow=true;
  pay=false;
  Order()
  {
    this.order=true;
    this.flow=false;
    this.pay=false;
  }
  payment()
  {
    this.flow=false;
    this.order=false;
    this.pay=true;
  }

  ngOnInit() {
  }

}
