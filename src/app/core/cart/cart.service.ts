import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn:'root'
})
export class CartService{

  constructor(private httpClient:HttpClient) {}

  addToCart(id:number,params:HttpParams){
    //this.httpClient.post()
  }
}
