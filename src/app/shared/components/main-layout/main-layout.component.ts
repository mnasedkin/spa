import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {slideInAnimation} from "../../animations";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class MainLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
