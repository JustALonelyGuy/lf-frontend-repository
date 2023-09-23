import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ProductListComponent } from './pages/product-list/product-list.component';
import { HomeComponent } from './pages/home/home.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import { HttpClientModule} from "@angular/common/http";
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { NavbarComponent } from './fragment/navbar/navbar.component';
import {NgOptimizedImage} from "@angular/common";
import {MatSliderModule} from "@angular/material/slider";
import {MatInputModule} from "@angular/material/input";
import {IvyCarouselModule} from "angular-responsive-carousel";
import { CustomerServiceComponent } from './pages/customer-service/customer-service.component';
import { FooterComponent } from './fragment/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HomeComponent,
    AboutUsComponent,
    NavbarComponent,
    CustomerServiceComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    HttpClientModule,
    NgOptimizedImage,
    MatSliderModule,
    MatInputModule,IvyCarouselModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
