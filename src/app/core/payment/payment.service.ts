import {Injectable, NgZone} from "@angular/core";
import {environment} from "../../../environments/environment";
import {Charge} from "./charge.interface";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ChargeResponse} from "./charge-response.interface";
import {BankCode} from "./bank-code.interface";

@Injectable({
  providedIn:'root'
})
export class PaymentService{

  private baseUrl = `${environment.apiUrl}/charges`;

  constructor(private httpClient:HttpClient,private ngZone:NgZone) {
  }

  charge(charge:Charge,params?:HttpParams){
    return this.httpClient.post<ChargeResponse>(this.baseUrl,charge,{params:params});
  }

  findAllSupportedPaymentMethod(params?:HttpParams){
    return this.httpClient.get<string[]>(`${this.baseUrl}/supported-payment-methods`,{params:params});
  }

  findAllSupportedBank(paymentMethod:string, params?:HttpParams){
    return this.httpClient.get<BankCode[]>(`${this.baseUrl}/${paymentMethod}/supported-banks`,{params:params});
  }

}
