import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ProductListComponent } from './pages/product-list/product-list.component';
import { HomeComponent } from './pages/home/home.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { NavbarComponent } from './fragment/navbar/navbar.component';
import {NgOptimizedImage} from "@angular/common";
import {MatSliderModule} from "@angular/material/slider";
import {MatInputModule} from "@angular/material/input";
import {IvyCarouselModule} from "angular-responsive-carousel";
import { CustomerServiceComponent } from './pages/customer-service/customer-service.component';
import { FooterComponent } from './fragment/footer/footer.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { AuthConfigModule } from './auth/auth-config.module';
import {AuthModule, LogLevel} from "angular-auth-oidc-client";
import { SidebarComponent } from './fragment/sidebar/sidebar.component';
import { AccountRegistrationComponent } from './pages/auth/account-registration/account-registration.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {ApiInterceptor} from "./core/interceptor/api.interceptor";
import { LoginComponent } from './pages/auth/login/login.component';
import {LoginGuard} from "./core/guard/login.guard";
import { ForgotPasswordComponent } from './pages/auth/forgot-password/forgot-password.component';
import { MillisecondToMinuteSecondPipe } from './core/pipe/millisecond-to-minute-second.pipe';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatCardModule} from "@angular/material/card";
import { AuthComponent } from './pages/auth/auth.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HomeComponent,
    AboutUsComponent,
    NavbarComponent,
    CustomerServiceComponent,
    FooterComponent,
    CheckoutComponent,
    ShoppingCartComponent,
    SidebarComponent,
    AccountRegistrationComponent,
    LoginComponent,
    ForgotPasswordComponent,
    MillisecondToMinuteSecondPipe,
    OrderDetailsComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    HttpClientModule,
    NgOptimizedImage,
    MatSliderModule,
    MatInputModule,
    IvyCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    AuthConfigModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatCardModule,

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
