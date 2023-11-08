import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UserAccount} from "./user-account.interface";
import {User} from "./user.interface";
import {Token} from "./token.interface";

@Injectable({
  providedIn:'root'
})
export class UserService{

  private path = '/api/v1/auth';

  constructor(private httpClient:HttpClient) {
  }

  public register(userAccount:UserAccount,options?:object){
    return this.httpClient.post<Response>(`${this.path}/register`,userAccount,options);
  }

  public sendAccountRecoveryEmail(emailAddress:string,options?:object){
    return this.httpClient.post<Response>(`${this.path}/account-recovery-email`,{email_address:emailAddress},options);
  }

  // public changePassword(accountRecovery:AccountRecovery,options?:object){
  //   return this.httpClient.post(`${this.path}/change-password`)
  // }
  public login(user:User,options?:object) {
    return this.httpClient.post<Token>(`${this.path}/login`,user,options);
  }

  public storeToken(token:Token){
    localStorage.setItem('token',JSON.stringify(token));
  }

  public getToken(){
    return localStorage.getItem('token');
  }
}
