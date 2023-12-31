import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isSidebarOpen:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggle($event: MouseEvent) {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
