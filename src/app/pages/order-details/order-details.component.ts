import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {


  orders = [{name:'Hey',price:200},{name:'Hey',price:200}
  ,{name:'Hey',price:200},{name:'Hey',price:200},{name:'Hey',price:200}];

  constructor() { }

  ngOnInit(): void {
  }

}
