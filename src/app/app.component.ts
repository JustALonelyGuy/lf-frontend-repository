import {Component, OnInit} from '@angular/core';
import {LoginResponse, OidcSecurityService} from "angular-auth-oidc-client";
import {HttpClient} from "@angular/common/http";
import * as http from "http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  data = '';
  constructor(private oidcSecurityService: OidcSecurityService,private httpClient:HttpClient) {
  }

  ngOnInit(){
    // this.oidcSecurityService
    //   .checkAuth()
    //   .subscribe((loginResponse: LoginResponse) => {
    //     const { isAuthenticated, userData, accessToken, idToken, configId } =
    //       loginResponse;
    //
    //     console.log(loginResponse);
    //
    //     /*...*/
    //   });
    this.login();
  }
  login() {
    // this.httpClient.get("http://localhost:8080?client_id=oidc-client&redirect_uri=https://oauthdebugger.com/debug&scope=openid&response_type=code &response_mode=form_post &state=sx9xmp8trfh&nonce=kh53r68z4z",
    //   {responseType: 'text'})
    //   .subscribe(res=>this.data = res);
    // this.oidcSecurityService.authorize();
  }


}
