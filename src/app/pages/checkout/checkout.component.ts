import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../core/product/product.service";
import {PaymentService} from "../../core/payment/payment.service";
import {lastValueFrom, Observable} from "rxjs";
import {ChargeResponse} from "../../core/payment/charge-response.interface";
import {BankCode} from "../../core/payment/bank-code.interface";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  //Observables
  paymentMethods$ : Observable<any>= new Observable<any>();
  availableBanks$: Observable<BankCode []> = new Observable<BankCode[]>();
  //control variables
  selectedPaymentMethod:string = 'TNG';
  selectedBank!:BankCode;


  constructor(private paymentService:PaymentService,private productService:ProductService) { }

  async ngOnInit(){
    this.findAllPaymentMethods();

  }

  async checkout(event:any){
    const response:ChargeResponse =  await lastValueFrom(this.paymentService.charge({
      total_amount:1400,
      payer:{
        email_address:"cheongkarwai5@gmail.com",
        phone_number:"01128188291",
        name:"Cheong Kar Wai"
      },
      items:[
        {name:"123",category:"entertainment",amount:500,sku:"2132"}
      ]
    },new HttpParams().set("paymentMethod",this.selectedPaymentMethod).set("bankCode",this.selectedBank.code))).catch(err=>err);

    window.open(response.authorize_uri);
  }

  findAllPaymentMethods(){
    this.paymentMethods$ =  this.paymentService.findAllSupportedPaymentMethod();
  }

  handleChangePaymentMethod(event:any){
    this.availableBanks$ = this.paymentService.findAllSupportedBank(this.selectedPaymentMethod);
  }
}
