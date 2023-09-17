import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from "@angular/router";
import {ProductListComponent} from "./pages/product-list/product-list.component";
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
  {path:'product-list',component:ProductListComponent},
  {path:'',component:HomeComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
