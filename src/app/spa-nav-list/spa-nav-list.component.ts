import { Component, OnInit } from '@angular/core';
import { SpaNavItem } from "./spa-nav-item";
import { ITEMS } from "../config/nav-config";

@Component({
  selector: 'app-spa-nav-list',
  templateUrl: './spa-nav-list.component.html',
  styleUrls: ['./spa-nav-list.component.css']
})
export class SpaNavListComponent implements OnInit {
  items: SpaNavItem[];
  constructor() { }

  ngOnInit() {
    this.items = ITEMS;
  }

}
