class AutoCarousel {
  constructor(selector, width, time) {
    this.index = 0;
    this.carousel = document.querySelector(selector);
    this.width = width;
    this.time = time;
    this.update();
    setInterval(() => this.nextSlide(), time);
  }

  nextSlide() {
    this.index = (this.index + 1) % this.carousel.children.length;
    this.update();
  }

  update() {
    this.carousel.style.transform = `translateX(${-this.index * this.width}px)`;
  }
}

const atuoCarousel = new AutoCarousel('.carousel2', 280, 2000);
