import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-gallery-lazy-load',
  templateUrl: './gallery-lazy-load.component.html',
  styleUrls: ['./gallery-lazy-load.component.css']
})

export class GalleryLazyLoadComponent implements OnInit {

  constructor() {
  }

  img = [
    {defaultImage: '../../assets/images/lazy-load.gif', lazyLoad: '../../assets/images/lazy_image.jpg',},
    {defaultImage: '../../assets/images/lazy-load.gif', lazyLoad: '../../assets/images/lazy1.jpg',},
    {defaultImage: '../../assets/images/lazy-load.gif', lazyLoad: '../../assets/images/lazy4.jpg',},
    {defaultImage: '../../assets/images/lazy-load.gif', lazyLoad: '../../assets/images/lazy2.jpg',},
    {defaultImage: '../../assets/images/lazy-load.gif', lazyLoad: '../../assets/images/lazy5.jpg',},
    {defaultImage: '../../assets/images/lazy-load.gif', lazyLoad: '../../assets/images/lazy3.jpg',},
    {defaultImage: '../../assets/images/lazy-load.gif', lazyLoad: '../../assets/images/lazy6.jpg',},
  ]

  ngOnInit(): void {
  }

}
