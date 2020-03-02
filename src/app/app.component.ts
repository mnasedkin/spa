import {Component, OnInit} from '@angular/core';
import {SwUpdate} from "@angular/service-worker";
import { PreloaderService } from './preloader.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'spa';
  //Inject service worker
  constructor(private swUpdate: SwUpdate, private preloader : PreloaderService) {
    this.preloader.spin$.next(true);
  }
  //Subscribe for a new available version
  ngOnInit(): void {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if(confirm("New version available. Load New Version?")) {
          window.location.reload();
        }
      });
    } else {
      console.log('not Enabled!');
    }

    setTimeout(
      () => this.preloader.spin$.next(false), 1000
    )
  }
}
