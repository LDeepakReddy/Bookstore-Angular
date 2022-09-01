import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  OrderId : any;
  constructor() { }

  ngOnInit(): void {
    this.OrderId = localStorage.getItem('OrderId');
    console.log("OrderId");
    console.log(this.OrderId);
  }

}
