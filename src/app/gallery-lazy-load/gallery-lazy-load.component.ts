import {
  Component,
  OnChanges,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-gallery-lazy-load',
  templateUrl: './gallery-lazy-load.component.html',
  styleUrls: ['./gallery-lazy-load.component.css']
})

export class GalleryLazyLoadComponent implements OnInit {
  constructor() {
  }

  public getLazyh;
  public img = [
    {defaultImage: '../../assets/images/lazy-load.gif', lazyLoad: '../../assets/images/lazy_image.jpg',},
    {defaultImage: '../../assets/images/lazy-load.gif', lazyLoad: '../../assets/images/lazy1.jpg',},
    {defaultImage: '../../assets/images/lazy-load.gif', lazyLoad: '../../assets/images/m.jpg',},
    {defaultImage: '../../assets/images/lazy-load.gif', lazyLoad: '../../assets/images/lazy2.jpg',},
    {defaultImage: '../../assets/images/lazy-load.gif', lazyLoad: '../../assets/images/lazy5.jpg',},
    {defaultImage: '../../assets/images/lazy-load.gif', lazyLoad: '../../assets/images/lazy3.jpg',},
    {defaultImage: '../../assets/images/lazy-load.gif', lazyLoad: '../../assets/images/orig.jpg',},
  ]

  ngOnChanges() {
    console.log('OnChanges');
  }

  ngOnInit(): void {
    /*-------------Start LazyLoad-----------------------------------------------------------------------------*/
    let scrollElement = document.getElementById('header');
    let lazyloadImages = scrollElement.getElementsByClassName("lazy");

    let gallery = document.getElementById('gallery');
    let lazy = gallery.getElementsByClassName('lazy');

    for (let i = 0; i < lazy.length; i++) {
      let img = lazy[i];
      if (img.getBoundingClientRect().y < (window.innerHeight - 100)) {
        if (img.className === 'lazy') {
          img.classList.remove('lazy');
          setTimeout(function () {
            // img.src = img.dataset.src;
          }, 400);
        }
      }
    }


    window.addEventListener("DOMContentLoaded", function () {
      getLazyLoadImg(lazyloadImages);
    });
    scrollElement.addEventListener("scroll", function () {
      getLazyLoadImg(lazyloadImages);
    });
    scrollElement.addEventListener("resize", function () {
      getLazyLoadImg(lazyloadImages);
    });
    scrollElement.addEventListener("orientationChange", function () {
      getLazyLoadImg(lazyloadImages);
    });

    /*-------------End LazyLoad -----------------------------------------------------------------------------*/

    function getLazyLoadImg(images) {
      for (let i = 0; i < images.length; i++) {
        let img = images[i];
        if (img.getBoundingClientRect().y < (window.innerHeight - 100)) {
          if (img.className === 'lazy') {
            img.classList.remove('lazy');
            setTimeout(function () {
              console.log(i);
              img.src = img.dataset.src;
            }, 400);
          }
        }
      }
    }
    this.getLazyh = getLazyLoadImg(lazyloadImages);
  }

}
