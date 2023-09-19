import { Component, OnInit } from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {ProductService} from "../../core/product/product.service";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent?: PageEvent;

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

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.findAll({params:new HttpParams().set("page",1).set("size",5),observe:'response'})
      .subscribe(res=>console.log(res));
  }

  handlePage(event:PageEvent){
    this.pageEvent = event;
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;


  }

}
