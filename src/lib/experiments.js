class ButtonAnimate {
  init(animatedElements) {
    for (let i = 0; i < animatedElements.length; i++) {
      this.animate(function (progress) {
        let value = (1 * progress);
        if (animatedElements[i]) {
          animatedElements[i].style.opacity = value;
          animatedElements[i].style.transform = 'translate(' + 1 * progress + 'rem, ' + 1 * progress + 'rem)';
        }
      }, 2000);
    }
  }

  /* function for top animation*/
  animate(draw, duration) {
    let start = performance.now();
    requestAnimationFrame(function animate(time) {
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) {
        timeFraction = 1;
      }
      draw(timeFraction);
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
    });
  }
}
