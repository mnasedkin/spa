/**
 *
 */
class BlockAnimate {

  constructor() {
    this.element = document.getElementById('header');
    this.duration = 500;
    this.winZipBlock = document.getElementById('top_box');
    this.top_img = this.winZipBlock.querySelector('img');
    this.animationBlock = document.getElementById('winzip-animation');
    this.bottomBox = document.getElementById('bottom_box');
    this.boxFractions = document.getElementsByClassName('polygon__triangle');
    this.scrollBox = document.getElementById('scroll');
    this.run = document.getElementById('scroll_runner');
    // Scrolling position (top of the screen)
    this.scrollPosition = this.element.scrollTop;
    /* Height of the whole site scroll + screen */
    this.scrollHeight = Math.max(
      this.element.scrollHeight, this.element.scrollHeight,
      this.element.offsetHeight, this.element.offsetHeight,
      this.element.clientHeight, this.element.clientHeight
    );
    /*Height of screen*/
    this.clientHeight = this.element.clientHeight;
    this.blokPos = this.animationBlock.getBoundingClientRect();
    /*Determining the top value at which the animation begins*/
    this.yStartOfAinmaton = this.clientHeight * 0.5;
    /*Determining the top value at which the animation ends*/
    this.yEndOfAinmaton = this.clientHeight - this.blokPos.height;
    this.speedOfAnimation = Math.abs(
      (this.boxFractions[0].offsetTop - this.winZipBlock.offsetTop) / (this.yEndOfAinmaton - this.yStartOfAinmaton)
    );
    this.animationBlockLocation = this.animationBlock.offsetTop + this.clientHeight;
    this.scrollBoxBlockLocation = this.scrollBox.offsetTop + this.clientHeight;

  }

  init(_this) {
    /*Если метод вызывается в без обработчика событий, вызываем встроенный обработчик.
     Если обработчик событий не scroll или onscroll, вызываем встроенный обработчик,
     иначе, если метод вызван уже в обработчике scroll, возвращаем только функцию callback*/
    if (typeof event === 'undefined') {
      console.log('first block (call handler no event)');
      _this.menedger(_this);
      _this.addScrollHandler(_this, _this.menedger);
    } else if (event.type === 'scroll' || event.type === 'onscroll') {
      console.log('second block (call only method)');
      _this.menedger(_this);
    } else {
      console.log('third block (call scroll handler in another events )');
      _this.menedger(_this);
      _this.addScrollHandler(_this, _this.menedger);
    }
  }

  //В метод надо передать текущий экземпляр класса для вызова контекста класса в контексте обработчика событий
  menedger(_this) {

    // анимация вертикального текста
    let text = document.getElementById('direction');
    let gallery = document.getElementById('gallery');
    let galleryTop = gallery.getBoundingClientRect();
    let move = galleryTop.y * 0.8 + 800;
    let val ='matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ' + move*2 + ', ' + move/2 + ', 0, 1)';
    text.style.transform = val;

    // animated block
    let winAnimate = {
      scrollingElement: document.getElementById('header'),
      scrollBox: _this.animationBlock,
      runner: document.getElementById('top_box'),
      clientHeight: _this.clientHeight,
      startPosition: -190,
      screenStart: 0.5,
      screenFinish: 0.2,
      run: _this.drawBottomAnimation(_this, parseInt(document.getElementById('top_box').style.top, 10)),
    };
    winAnimate.runner.style.top = _this.runScrollAnimation(winAnimate);

    //Анимация бегунка
    let runAnimate = {
      scrollingElement: document.getElementById('header'),
      scrollBox: _this.scrollBox,
      runner: document.getElementById('scroll_runner'),
      clientHeight: _this.clientHeight,
      startPosition: 0,
      screenStart: 0.3,
      screenFinish: 0.3,
      run: function () {
      },
    };
    runAnimate.runner.style.top = _this.runScrollAnimation(runAnimate);
    // runAnimate.runner.style.transform = 'translateY: ('10 + 10 + ');';
  }

  runScrollAnimation(param) {

    let result;

    let scrollingElement = param.scrollingElement;
    let scrollBox = param.scrollBox;
    let runner = param.runner;
    let clientHeight = param.clientHeight;
    let startPosition = param.startPosition;
    let screenStart = param.screenStart;
    let screenFinish = param.screenFinish;
    let run = param.run;

    let scrollBoxTop = -scrollBox.getBoundingClientRect().y;
    let scrollBoxHeight = scrollBox.getBoundingClientRect().height;
    let runnerPosition = parseInt(runner.style.top, 10);
    if (isNaN(runnerPosition)) {
      runnerPosition = 0;
    }
    let runnerHeight = runner.offsetHeight;
    let delta = (clientHeight * (1 - screenStart - screenFinish))*(runnerPosition/(scrollBoxHeight-runnerHeight));

    runnerPosition = scrollBoxTop + clientHeight * screenStart;
    result = runnerPosition + delta;

    if (result < startPosition) {
      result = startPosition;
    }
    if (result > scrollBoxHeight - runnerHeight) {
      result = scrollBoxHeight - runnerHeight;
    }
    return result + 'px';
  }

  drawBottomAnimation(_this, nextPosition) {

    // Ставим флаг что блок упал
    if (nextPosition >= _this.animationBlock.offsetHeight - _this.boxFractions[0].height) {
      _this.winZipBlock.setAttribute('fell', 'true');
      _this.top_img.src = '../assets/images/reggie_thumbs_up.png';
    } else {
      _this.winZipBlock.setAttribute('fell', 'false');
      _this.top_img.src = '../assets/images/wz_top.png'
    }

    //animation for bottom box bang
    // Слушаем флаг упавшего блока и сетим его в нижний ящик, анимацию взрыва выполняют css
    let isStartBang = _this.winZipBlock.getAttribute('fell');
    if (isStartBang === 'true') {
      // let timeOut = setTimeout(function () {
      _this.bottomBox.setAttribute('fell', 'true');
      // }, 500);
    } else {
      _this.bottomBox.setAttribute('fell', 'false');
    }
  }

  /*-------------Start #common functions -------------------------------------------------------------------------*/

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

  // method for create scroll handler
  addScrollHandler(_this, callback) {
    /*for scroll event*/
    function scrollHandler(callback) {
      _this.addHandler(window, 'scroll', callback);
    }

    //for set 'this' in event handler
    scrollHandler(function () {
      return callback(_this);
    });
  }

  // method for create wheel handler
  addWheelHandler(_this, callback) {
    function wheelHandler(callback) {
      _this.addHandler(window, 'mousewheel', callback);
    }

    //for set 'this' in event handler
    wheelHandler(function () {
      return callback(_this);
    });
  }

  /* cross-browser method for scroll handler*/
  addHandler(object, event, handler, useCapture) {
    if (object.addEventListener) {
      object.addEventListener(event, handler, useCapture ? useCapture : false);
    } else if (object.attachEvent) {
      object.attachEvent('on' + event, handler);
    } else alert("Add handler is not supported");
  }

  // Метот возвращает -1 при каждой прокрутке вниз и 1 - вверх.
  wheel(event) {
    var delta; // Scroll direction
    event = event || window.event;
    // Opera and IE work with the wheelDelta property
    if (event.wheelDelta) {
      delta = event.wheelDelta / 120;
      // In Opera, the value of wheelDelta is the same, but with the opposite sign
      if (window.opera) delta = -delta;
      // In the Gecko implementation, we get the detail property
    } else if (event.detail) {
      delta = -event.detail / 3;
    }
    return delta;
  }

  /*-------------End #common functions ----------------------------------------------------------------------------*/
}

/*-------------Start Document loaded-----------------------------------------------------------------------------*/
// document.addEventListener("DOMContentLoaded", function () {
//   let startAnimation = new BlockAnimate();
//   startAnimation.init(startAnimation);
// });
/*-------------End Document loaded -----------------------------------------------------------------------------*/
