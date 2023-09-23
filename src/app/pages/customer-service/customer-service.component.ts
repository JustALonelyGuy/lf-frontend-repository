import { Component, OnInit } from '@angular/core';
import {Tab} from "./tab.interface";
import * as Aos from "aos";

@Component({
  selector: 'app-customer-service',
  templateUrl: './customer-service.component.html',
  styleUrls: ['./customer-service.component.css']
})
export class CustomerServiceComponent implements OnInit {

  selectedTab = "FAQ";

  tabs:Tab[] = [
    {imageUrl:'../../../assets/images/faq.png',title:'FAQ',width:150,height:150,alt:'FAQ'},
    {imageUrl:'../../../assets/images/information.png',title:'Terms & Conditions', width:150, height:150,alt:"term & condition"},
    {imageUrl:'../../../assets/images/exchange.png',title:'Return & Refund Policy', width:150, height:150,alt:"refund"},
    {imageUrl:'../../../assets/images/mail-message.png',title:'Contact Us', width:150, height:150,alt:"contact"}
  ]
  constructor() { }

  ngOnInit(): void {
    Aos.init();
  }

  switchTab(name:any){
    this.selectedTab = name;
  }

}
