class Carousel {
  index = 0;
  lastIndex = 3; // 마지막 이미지의 인덱스

  constructor() {
    this.carousel = document.querySelector('.carousel');
    this.pButton = document.querySelector('.prev');
    this.nButton = document.querySelector('.next');

    this.slide();
  }

  slide() {
    this.pButton.addEventListener('click', () => {
      this.prev();
    });

    this.nButton.addEventListener('click', () => {
      this.next();
    });
  }

  prev() {
    if (this.index === 0) {
      this.index = this.lastIndex;
    } else {
      this.index -= 1;
    }

    this.carousel.style.transform = `translate3d(-${350 * this.index}px, 0, 0)`;
  }

  next() {
    if (this.index === this.lastIndex) {
      this.index = 0;
    } else {
      this.index += 1;
    }

    this.carousel.style.transform = `translate3d(-${350 * this.index}px, 0, 0)`;
  }
}

const carousel = new Carousel();