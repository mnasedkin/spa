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

export class GalleryLazyLoadComponent implements OnInit, OnChanges {
  constructor() { }

  public img = [
    {class: 0, defaultImage: '../../assets/images/lazy-load.gif', lazyLoad: '../../assets/images/lazy_image.jpg',},
    {class: 1, defaultImage: '../../assets/images/lazy-load.gif', lazyLoad: '../../assets/images/lazy4.jpg',},
    {class: 2, defaultImage: '../../assets/images/lazy-load.gif', lazyLoad: '../../assets/images/lazy1.jpg',},
    {class: 3, defaultImage: '../../assets/images/lazy-load.gif', lazyLoad: '../../assets/images/m.jpg',},
    {class: 4, defaultImage: '../../assets/images/lazy-load.gif', lazyLoad: '../../assets/images/lazy2.jpg',},
    {class: 5, defaultImage: '../../assets/images/lazy-load.gif', lazyLoad: '../../assets/images/lazy5.jpg',},
    {class: 6, defaultImage: '../../assets/images/lazy-load.gif', lazyLoad: '../../assets/images/lazy3.jpg',},
  ];

  public class: any = 1;

  ngOnChanges() {
    console.log('OnChanges');
  }

  ngOnInit(): void {
    /*-------------Start LazyLoad-----------------------------------------------------------------------------*/
    let scrollElement = document.getElementById('header');
    let gallery = document.getElementById('gallery');
    let lazyloadImages = gallery.getElementsByClassName('lazy');

    let animation = [
      {opacity: 1, translate: {x: [2, 'em'], y: [1, 'em']}, boxShadow: ['-2px 6px 8px 6px rgba(0,0,0,0.24)']},
      {opacity: 1, translate: {x: [-2, 'em'], y: [1, 'em']}, boxShadow: ['-2px 6px 8px 6px rgba(0,0,0,0.24)']},
      {opacity: 1, translate: {x: [4, 'em'], y: [1, 'em']}, boxShadow: ['-2px 6px 8px 6px rgba(0,0,0,0.24)']},
      {opacity: 1, translate: {x: [2, 'em'], y: [1, 'em']}, boxShadow: ['-2px 6px 8px 6px rgba(0,0,0,0.24)']},
      {opacity: 1, translate: {x: [-3, 'em'], y: [1, 'em']}, boxShadow: ['-2px 6px 8px 6px rgba(0,0,0,0.24)']},
      {opacity: 1, translate: {x: [1, 'em'], y: [1, 'em']}, boxShadow: ['-2px 6px 8px 6px rgba(0,0,0,0.24)']},
      {opacity: 1, translate: {x: [-4, 'em'], y: [1, 'em']}, boxShadow: ['-2px 6px 8px 6px rgba(0,0,0,0.24)']},
    ];

    function listener() {
      getLazyLoadImg(lazyloadImages, animation);
    }

    window.addEventListener("DOMContentLoaded", function () {
      getLazyLoadImg([lazyloadImages[0]], animation);
    });
    scrollElement.addEventListener("scroll", listener);
    scrollElement.addEventListener("resize", listener);
    scrollElement.addEventListener("orientationChange", listener);
    /*-------------End LazyLoad -----------------------------------------------------------------------------*/


    function getLazyLoadImg(images, animation) {
      for (let i = 0; i < images.length; i++) {
        let img = images[i];
        // console.log(images);
        if (img.getBoundingClientRect().y < (window.innerHeight - 100)) {
          if (img.className === 'lazy') {
            console.log('[ngStyle]: ', img.id);
            console.log('[animation]: ', animation[img.id]);
            img.classList.remove('lazy');
            setTimeout(function () {
              console.log(i);
              img.src = img.dataset.src;
              let duration = 700;
              let start = performance.now();
              requestAnimationFrame(function play(time) {
                let timeFraction = (time - start) / duration;
                if (timeFraction > 1) {
                  timeFraction = 1;
                }
                let progress = timeFraction;
                img.style.opacity = animation[img.id].opacity * progress;
                img.style.transform = 'translate(' + animation[img.id].translate.x[0] * (1 / progress) + animation[img.id].translate.x[1] + ', ' + animation[img.id].translate.y[0] * progress + animation[img.id].translate.y[1] + ')';
                img.style.boxShadow = '-2px 6px 8px 6px rgba(0,0,0, ' + 0.24 * progress + ')';
                if (timeFraction < 1) {
                  requestAnimationFrame(play);
                }
              });
            }, 800);
          }
        }
      }
    }
  }

  /*method for animation with requestAnimationFrame*/
  animate(_this, draw, duration) {
    let start = performance.now();
    requestAnimationFrame(function play(time) {
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) {
        timeFraction = 1;
      }
      let progress = timeFraction;
      draw(_this, progress);
      if (timeFraction < 1) {
        requestAnimationFrame(play);
      }
    });
  }

}
