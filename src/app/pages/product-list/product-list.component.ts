import { Component, OnInit } from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {ProductService} from "../../core/product/product.service";
import {HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [10, 25, 50];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent?: PageEvent;

  panelOpenState = false;

  brands = [{id:1,name:'Brand'},{id:2,name:'123'},
    {id:1,name:'Brand'},{id:2,name:'123'},
    {id:1,name:'Brand'},{id:2,name:'123'},{id:1,name:'Brand'},{id:2,name:'123'},
    {id:1,name:'Brand'},{id:2,name:'123'},
    {id:1,name:'Brand'},{id:2,name:'123'},
    {id:1,name:'Brand'},{id:2,name:'123'},
    {id:1,name:'Brand'},{id:2,name:'123'},{id:1,name:'Brand'},{id:2,name:'123'},
    {id:1,name:'Brand'},{id:2,name:'123'}];

  products:any[] = [
    {name:'testingggg',price:1233333,description:'hello,'},
    {name:'testingggg',price:1233333,description:'hello,'},
    {name:'testingggg',price:1233333,description:'hello,'},
    {name:'testingggg',price:1233333,description:'hello,'},
    {name:'testingggg',price:1233333,description:'hello,'},
    {name:'testingggg',price:1233333,description:'hello,'},
    {name:'testingggg',price:1233333,description:'hello,'},
    {name:'testingggg',price:1233333,description:'hello,'},
  ]

  productInfo$:Observable<any> = new Observable<any>();

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getProducts(this.pageIndex,this.pageSize);
    // this.productInfo$ = this.productService.findAll({params:new HttpParams().set("page",).set("page_size",2)});
  }

  handlePage(event:PageEvent){
    this.pageEvent = event;
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;

    this.getProducts(this.pageIndex,this.pageSize);
    console.log(this.pageIndex);
    console.log(this.pageSize);

  }

  getProducts(page:number,pageSize:number){
    this.productInfo$ = this.productService.findAll({params:new HttpParams().set("page",page).set("page_size",pageSize)});
  }

  addToCart(id:number) {
    console.log(id);
  }
}
