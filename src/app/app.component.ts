import {Component, OnInit} from '@angular/core';
import {SwUpdate} from "@angular/service-worker";
// import '../lib/paralaxanimate.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'spa';
  //Inject service worker
  constructor(private swUpdate: SwUpdate) {}
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
  }
}
