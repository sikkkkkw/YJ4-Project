class AutoCarousel {
  constructor(selector, width, time) {
    this.index = 0;
    this.carousel = document.querySelector(selector);
    this.width = width;
    this.time = time;
    this.update();
    setInterval(() => this.nextSlide(), time);
  }

  /**index를 1씩 올린다. 
   * 나머지 연산자를 통해 캐러셀이 무한루프를 하게 만든다.
   * 이미지가 총 3장일 때(this.carousel.children.length=3), 마지막 슬라이드(index=2)에서 또 다음으로 넘어가게 하면 (2+1)%3은 0이므로 다시 index가 0이된다. 즉 처음 슬라이드(index=0)으로 돌아간다.
   */
  nextSlide() {
    this.index = (this.index + 1) % this.carousel.children.length;
    this.update();
  }

  /**캐러셀의 위치를 좌우로 이동시킨다. 
   * translateX은 X축 위치를 정한다.
   */
  update() {
    this.carousel.style.transform = `translateX(${-this.index * this.width}px)`;
  }
}

const atuoCarousel = new AutoCarousel('.carousel2', 280, 2000);
/**움직일 대상은 .carousel2
 * 이미지의 가로길이 270+양쪽 마진5=290
 * 2000밀리초(2초)에 한번씩 움직인다.
 * 
 * 생성자(constructor)안에 setInterval 함수가 있어서 인스턴스를 만들 때 바로 함수가 호출된다.
 * setInterval 함수를 통해 특정시간마다 자동으로 nextslide 함수를 실행시킨다.
 */