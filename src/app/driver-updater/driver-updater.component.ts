import { Component, OnInit } from '@angular/core';
import {LinksService} from "../links.service";
import {Link} from "../shared/components/links/links";
import {faHeadphones, faSearch} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-driver-updater',
  templateUrl: './driver-updater.component.html',
  styleUrls: ['../shared/components/main-layout/main-layout.component.css']
})
export class DriverUpdaterComponent implements OnInit {
  private links:Link[] = [
    {
      name: 'Browse through our Product Support center',
      url: '/help',
      icon: faSearch,
    },
    {
      name: 'Contact our Support team now',
      url: '/help',
      icon: faHeadphones,
    },
  ];
  private showHeader: boolean = false;//do not show header line
  constructor(private linksService: LinksService) {}

  ngOnInit(): void {
    //set help links
    this.linksService.setLinks(this.links);
    //set help header line
    this.linksService.setHeader(this.showHeader);

    this.animateImg();
  }

  animateImg() {
    /*--------Start 3d animation ------------------------------------------------------------------------------------*/
    const cards = document.querySelector(".cards");
    const images = document.querySelectorAll(".card__img");
    const range = 300;
    const calcValue = (a, b) => (a/b*range-range/2).toFixed(1);
    console.log(cards);
    let timeout;
    let activeAria = document.getElementById('translate');
    activeAria.addEventListener('mousemove', (event) => {
      console.log(event);
      if (timeout) {
        window.cancelAnimationFrame(timeout);
      }

      timeout = window.requestAnimationFrame(() => {
        const yValue = calcValue(event.clientY, window.innerHeight);
        const xValue = calcValue(event.clientX, window.innerWidth);

        (cards as HTMLElement).style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;

        [].forEach.call(images, (image) => {
          (image as HTMLElement).style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
        });
      })
    }, false);
  }

}
