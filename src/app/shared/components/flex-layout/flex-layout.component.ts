import {Component, OnInit } from '@angular/core';
 declare var BlockAnimate: any
 declare var ButtonAnimate: any

@Component({
  selector: 'app-flex-layout',
  templateUrl: './flex-layout.component.html',
  styleUrls: ['./flex-layout.component.css']
})

export class FlexLayoutComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    /*-------------Start Document loaded-----------------------------------------------------------------------------*/
    let element = document.getElementById('header');
      let startAnimation = new BlockAnimate();
    element.addEventListener("scroll", function (event) {
      return startAnimation.init(startAnimation);
    });
    /*-------------End Document loaded -----------------------------------------------------------------------------*/
    // animateManifest();
    let animatedElements = document.getElementsByClassName('button__anchor--animate');
    // console.log(animatedElements);
    let buttonManifest = new ButtonAnimate();
    buttonManifest.init(animatedElements);

  }

}




