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
    /*Высота всего сайта скрол + скрин*/
    this.scrollHeight = Math.max(
      this.element.scrollHeight, this.element.scrollHeight,
      this.element.offsetHeight, this.element.offsetHeight,
      this.element.clientHeight, this.element.clientHeight
    );
    /*Высота скрина*/
    this.clientHeight = this.element.clientHeight;
    this.blokPos = this.animationBlock.getBoundingClientRect();
    /*Определение значения top при котором начинается анимация*/
    this.yStartOfAinmaton = this.clientHeight * 0.5;
    /*Определение значения top при котором заканчивается анимация*/
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

    // Отдельно слушаю колесо мышки
    // _this.addWheelHandler(_this, _this.menedger);

  }

  //В метод надо передать текущий экземпляр класса для вызова контекста класса в контексте обработчика событий
  menedger(_this) {

    // Отслеживаю дельту каждого скрола и передаю скрол в this
    let el = document.getElementById('header');
    let pageYOffset = el.scrollTop;
    let delta = (pageYOffset - _this.scrollPosition);
    _this.scrollPosition = pageYOffset;

    // Включить для вывода скроллинга и определения начала и конца скролла
    console.log('pageYOffset: ', pageYOffset);

    // animated block
    let winZipBlock = document.getElementById('top_box');
    let winAnimate = {
      scrollingElement: document.getElementById('header'),
      deltaScroll: delta,
      scrollBox: _this.animationBlock,
      runner: document.getElementById('top_box'),
      startPosition: -190,
      yStart: 4600,
      yEnd: 5120,
      run: _this.drawBottomAnimation(_this, parseInt(winZipBlock.style.top, 10)),
    };
    winAnimate.runner.style.top = _this.runAnimate(winAnimate);

    // if (event.type === 'mousewheel') {
    //   _this.delta = _this.wheel(event, _this);
    //   console.log('event[' + event.type + ']: ', _this.delta + ', pageYOffset: ' + _this.scrollPosition);
    //   winZipBlock.style.top = _this.drawBottomAnimation(_this, winZipBlock.offsetTop, deltaOffset);
    // } else {
    // }

    //Анимация бегунка
    let runnerAnimate = {
      scrollingElement: document.getElementById('header'),
      deltaScroll: delta,
      scrollBox: _this.scrollBox,
      runner: document.getElementById('scroll_runner'),
      startPosition: 0,
      yStart: 400,
      yEnd: 4600,
      run: function () {},
    };
    runnerAnimate.runner.style.top = _this.runAnimate(runnerAnimate);
  }

  drawCDirection(_this, el) {
    let result;
    console.log(el.style.transform);
    let value = pageYOffset - 500;
    result = 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' + value + ', 0, 1)';
    return result;
  }

  runAnimate(elements) {
    let scrollingElement = elements.scrollingElement,
      deltaScroll = elements.deltaScroll,
      scrollBox = elements.scrollBox,
      runner = elements.runner,
      yStart = elements.yStart,
      yEnd = elements.yEnd,
      startPosition = elements.startPosition;
    let pageYOffset = scrollingElement.scrollTop;
    let start = parseInt(runner.style.top, 10);
    let result = start;
    if (isNaN(start)) {
      start = 0;
    }
    let speed = scrollBox.offsetHeight / (yEnd - yStart);
    let finish = (pageYOffset - yStart) * speed;
    if (finish > (scrollBox.offsetHeight - runner.offsetHeight)) {
      finish = scrollBox.offsetHeight - runner.offsetHeight
    }
    if (finish < startPosition) {
      finish = startPosition;
    }
    result = finish + 'px';
    // дополнительная функция для выполнения
    elements.run;
    return result;
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
