import {Component, OnInit, HostListener, Inject} from '@angular/core';
import {Injectable} from '@angular/core';
// import '../../../../lib/winzipanimate.js'
import {ScriptStore} from "../../../script.store";
 declare var BlockAnimate: any


@Component({
  selector: 'app-flex-layout',
  templateUrl: './flex-layout.component.html',
  styleUrls: ['./flex-layout.component.css']
})

export class FlexLayoutComponent implements OnInit {

  constructor() {
    // console.log(window);
  }

  ngOnInit(): void {
    /*-------------Start Document loaded-----------------------------------------------------------------------------*/
    let element = document.getElementById('header');
      let startAnimation = new BlockAnimate();
    element.addEventListener("scroll", function (event) {
      return startAnimation.init(startAnimation);
    });
    /*-------------End Document loaded -----------------------------------------------------------------------------*/
  }

}
