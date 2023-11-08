import {Injectable, NgZone} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn:'root'
})
export class ProductService{

  private baseUrl = '/api/v1/products';

  constructor(private httpClient:HttpClient,private ngZone:NgZone) {}

  // findAll(options:any){
  //   return new Observable<any>((subscriber) => {
  //
  //     const eventSource = new EventSource(this.baseUrl,{withCredentials:false,});
  //
  //     // Process incoming messages
  //     eventSource.onmessage = (event) => {
  //       const data = JSON.parse(event.data);
  //
  //       this.ngZone.run(() => subscriber.next(data));
  //     };
  //
  //     // Handle error
  //     eventSource.onerror = (error) => {
  //       if (eventSource.readyState === 0) {
  //         // The connection has been closed by the server
  //         eventSource.close();
  //         subscriber.complete();
  //       } else {
  //         subscriber.error(error);
  //       }
  //     };
  //   });
  //   //return this.httpClient.get(this.baseUrl,options);
  // }

  findAll(options?:object){
    return this.httpClient.get(this.baseUrl,options);
  }

}
