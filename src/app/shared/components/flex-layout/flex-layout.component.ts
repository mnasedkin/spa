import {Component, OnDestroy, OnInit } from '@angular/core';
 declare var BlockAnimate: any
 declare var ButtonAnimate: any

@Component({
  selector: 'app-flex-layout',
  templateUrl: './flex-layout.component.html',
  styleUrls: ['./flex-layout.component.css']
})

export class FlexLayoutComponent implements OnInit, OnDestroy {
  private element: HTMLElement;
  private listener: (event) => void;

  constructor() {}

  ngOnInit(): void {
    this.listener = function (event) {
      return startAnimation.init(startAnimation);
    };
    /*-------------Start Document loaded-----------------------------------------------------------------------------*/
    this.element = document.getElementById('header');
      let startAnimation = new BlockAnimate();
    this.element.addEventListener("scroll", this.listener);
    /*-------------End Document loaded -----------------------------------------------------------------------------*/
    let animatedElements = document.getElementsByClassName('button__anchor--animate');
    let buttonManifest = new ButtonAnimate();
    buttonManifest.init(animatedElements);
  }

  ngOnDestroy(){
    this.element.removeEventListener('scroll', this.listener);
  }

}




