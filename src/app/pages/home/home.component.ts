import { Component, OnInit } from '@angular/core';
import * as Aos from "aos";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  images = [
    {path:'../../../assets/images/3M_wordmark.svg.png',width:30,height:30},
    {path:'../../../assets/images/2560px-Energizer_Logo.svg.png'},
    {path:'../../../assets/images/2560px-WD-40_logo.svg.png'},
    {path:'../../../assets/images/06397a037bd7576a70d82735483b56f7.jpeg'},
    {path:'../../../assets/images/ARALDITE.jpg'},
    {path:'../../../assets/images/ARROW.jpg'},
    {path:'../../../assets/images/HARDEX.png'},
    {path:'../../../assets/images/irwin-logo-300px.jpg'},
    {path:'../../../assets/images/JOTUN.png'},
    {path:'../../../assets/images/Kaercher_Logo_2015.png'},
    {path:'../../../assets/images/logo-dunlop-seo.jpg'},
    {path:'../../../assets/images/Logo-Milwaukee.jpg'},
    {path:'../../../assets/images/Logo_Sika_AG.svg.png'},
    {path:'../../../assets/images/Master-logo-Gere-03.jpg'},
    {path:'../../../assets/images/Midea_Logo_RGB_blue_on_white_NoRegister.png'},
    {path:'../../../assets/images/NIETZ.jpg'},
    {path:'../../../assets/images/NIPPON.png'},
    {path:'../../../assets/images/og-total-my.png'},
    {path:'../../../assets/images/SANCORA.jpg'},
    {path:'../../../assets/images/StGuchi logo.png'},
    {path:'../../../assets/images/tsunami.png'},
    {path:'../../../assets/images/YALE.jpeg'},


  ]
  constructor() { }

  ngOnInit(): void {
    Aos.init();
  }

}
