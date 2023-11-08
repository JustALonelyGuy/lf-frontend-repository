import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from "@angular/router";
import {ProductListComponent} from "./pages/product-list/product-list.component";
import {HomeComponent} from "./pages/home/home.component";
import {AboutUsComponent} from "./pages/about-us/about-us.component";
import {CustomerServiceComponent} from "./pages/customer-service/customer-service.component";
import {CheckoutComponent} from "./pages/checkout/checkout.component";
import {ShoppingCartComponent} from "./pages/shopping-cart/shopping-cart.component";
import {AccountRegistrationComponent} from "./pages/auth/account-registration/account-registration.component";
import {LoginComponent} from "./pages/auth/login/login.component";
import {LoginGuard} from "./core/guard/login.guard";
import {ForgotPasswordComponent} from "./pages/auth/forgot-password/forgot-password.component";
import {OrderDetailsComponent} from "./pages/order-details/order-details.component";
import {AuthComponent} from "./pages/auth/auth.component";

const routes: Routes = [
  {path:'product-list',component:ProductListComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'customer-service',component:CustomerServiceComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'',component:HomeComponent},
  {path:'shopping-cart',component:ShoppingCartComponent},
  {
    path:'auth',
    component:AuthComponent,
    children:[
      {path:'',pathMatch:'full',redirectTo:'login'},
      {path:'login',component: LoginComponent},
      {path:'account-registration',component: AccountRegistrationComponent},
      {path:'forgot-password',component:ForgotPasswordComponent}
    ]},
  {path:'order-details',component:OrderDetailsComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
