// class Carousel {
//   index = 0;
//   lastIndex = 3; // 마지막 이미지의 인덱스

//   constructor() {
//     this.carousel = document.querySelector('.carousel');
//     this.pButton = document.querySelector('.prev');
//     this.nButton = document.querySelector('.next');

//     this.slide();
//   }

//   slide() {
//     this.pButton.addEventListener('click', () => {
//       this.prev();
//     });

//     this.nButton.addEventListener('click', () => {
//       this.next();
//     });
//   }

//   prev() {
//     if (this.index === 0) {
//       this.index = this.lastIndex;
//     } else {
//       this.index -= 1;
//     }

//     this.carousel.style.transform = `translate3d(-${360 * this.index}px, 0, 0)`;
//   }

//   next() {
//     if (this.index === this.lastIndex) {
//       this.index = 0;
//     } else {
//       this.index += 1;
//     }

//     this.carousel.style.transform = `translate3d(-${360 * this.index}px, 0, 0)`;
//   }
// }

// const carousel = new Carousel();

class InfiniteCarousel {
  constructor() {
    this.carouselBox = document.querySelector('.carouselBox');
    this.carousel = document.querySelector('.carousel');
    this.images = document.querySelectorAll('.carouselBox .carousel img');
    this.imageCount = this.images.length;
    this.imageWidth = 360;
    this.currentIndex = 1; 

    this.setupEvents();
  }

  setupEvents() {
    this.carousel.addEventListener('transitionend', () => this.handleTransitionEnd());
    this.updateCarousel();
    setInterval(() => this.next(), 3000); 
  }

  updateCarousel() {
    const translateX = -this.currentIndex * this.imageWidth;
    this.carousel.style.transform = `translateX(${translateX}px)`;

    this.images.forEach((img, i) => {
      const scaleFactor = (i === this.currentIndex || i === this.currentIndex - 1 || i === this.currentIndex + 1) ? (i === this.currentIndex + 1) ? 1.4 : 0.7 : 0.7;
      img.style.transform = `scale(${scaleFactor})`;
      img.style.position = 'relative'; 
      img.style.zIndex = (i === this.currentIndex + 1) ? 1 : 'auto'; 
    });

    this.images.forEach((img, i) => {
      img.classList.toggle('active', i === this.currentIndex);
    });
  }

  handleTransitionEnd() {
    if (this.currentIndex === 0) {
      this.carousel.style.transition = 'none';
      this.currentIndex = this.imageCount - 2;
      this.updateCarousel();
      void this.carousel.offsetWidth;
      this.carousel.style.transition = '';
    } else if (this.currentIndex === this.imageCount - 1) {
      this.carousel.style.transition = 'none';
      this.currentIndex = 1;
      this.updateCarousel();
      void this.carousel.offsetWidth;
      this.carousel.style.transition = '';
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.imageCount - 1;
    }
    this.updateCarousel();
  }

  next() {
    if (this.currentIndex < this.imageCount - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.updateCarousel();
  }
}

const infiniteCarousel = new InfiniteCarousel();