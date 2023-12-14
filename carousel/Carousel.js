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
    setInterval(() => this.next(), 3900); 
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