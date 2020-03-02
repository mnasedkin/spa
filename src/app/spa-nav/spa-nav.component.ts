import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {RouterOutlet} from "@angular/router";
import {slideInAnimation} from "../shared/animations";

@Component({
  selector: 'app-spa-nav',
  templateUrl: './spa-nav.component.html',
  styleUrls: ['./spa-nav.component.css']
})
export class SpaNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
