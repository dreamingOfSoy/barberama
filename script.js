'use strict';

/*
/////////////////////////////
CAROUSEL SECTION
/////////////////////////////
*/

// Selectors
const headerCarouselImgsContainer = document.querySelector('.carousel__imgs');
const headerCarouselImgs = document.querySelectorAll('.carousel__img');
const headerCarouselIndicators = document.querySelectorAll(
  '.carousel__indicator'
);
const headerCarouselPrevBtn = document.querySelector('.carousel__prev-btn');
const headerCarouselNextBtn = document.querySelector('.carousel__next-btn');
const carouselIconPlay = document.querySelector('.carousel__icon--play');
const carouselIconPause = document.querySelector('.carousel__icon--pause');

// Lay out carousel images in correct order.
headerCarouselImgs.forEach((img, i) => {
  img.style.transform = `translateX(${i * 100}%)`;
});

// Set counter
let curCount = 0;

// Slide images to the right
function slideRight() {
  // Update counter everytime and image slides.
  curCount++;
  // Apply styles to each image so to move them along.
  headerCarouselImgs.forEach((img, i) => {
    img.style.transition = 'all, 0.8s';
    img.style.transform = `translateX(${100 * (i - curCount)}%)`;
  });

  // Keep the carousel Indicators linked with the images as they move.
  headerCarouselIndicators.forEach(i => {
    i.classList.remove('u-carousel-indicators-active');
    if (+i.dataset.id === curCount)
      i.classList.add('u-carousel-indicators-active');

    if (curCount === 3)
      headerCarouselIndicators[0].classList.add('u-carousel-indicators-active');
  });
}

// For each image, we listen to for the 'transitionend' event which allows the transition to end.
headerCarouselImgs.forEach(img => {
  img.addEventListener('transitionend', () => {
    if (typeof headerCarouselImgs[curCount] === 'undefined') return;
    // After the correct transition has ended, we shift all the images back to their original positions and reset the counter.
    if (headerCarouselImgs[curCount].id === 'clone') {
      curCount = 0;
      headerCarouselImgs.forEach((img, i) => {
        img.style.transition = 'none';
        img.style.transform = `translateX(${100 * (i - curCount)}%)`;
      });
    }
  });
});

// Interval default.
let intervalId = null;

// Interval manager that controls the carousel slide state.
const slideIntervalManager = function (flag, animate, time) {
  if (flag) {
    intervalId = setInterval(animate, time);
  } else {
    clearInterval(intervalId);
  }
};
// Setting the carousel slide state on load of the page.
slideIntervalManager(true, slideRight, 3000);

// Controls clicking a carousel indicator.
headerCarouselIndicators.forEach(i => {
  i.addEventListener('click', function (e) {
    slideIntervalManager(false);
    carouselIconPause.classList.add('u-display-none');
    carouselIconPlay.classList.remove('u-display-none');

    // Depending on where the carousel has been paused, we provide the correct transition to land on the corresponding image.
    if (curCount === 0) {
      if (e.target.dataset.id === '0') {
        headerCarouselImgs.forEach((img, i) => {
          img.style.transition = 'all, 0.8s';
          img.style.transform = `translateX(${100 * (i - curCount)}%)`;
        });
      }

      if (e.target.dataset.id === '1') {
        headerCarouselImgs.forEach((img, i) => {
          img.style.transition = 'all, 0.8s';
          img.style.transform = `translateX(${100 * (i + curCount - 1)}%)`;
        });
      }

      if (e.target.dataset.id === '2') {
        headerCarouselImgs.forEach((img, i) => {
          img.style.transition = 'all, 0.8s';
          img.style.transform = `translateX(${100 * (i - curCount - 2)}%)`;
        });
      }
    }

    if (curCount === 1) {
      if (e.target.dataset.id === '0') {
        headerCarouselImgs.forEach((img, i) => {
          img.style.transform = `translateX(${100 * (i - curCount + 1)}%)`;
        });
      }
      if (e.target.dataset.id === '1') {
        headerCarouselImgs.forEach((img, i) => {
          img.style.transform = `translateX(${100 * (i + curCount - 2)}%)`;
        });
      }
      if (e.target.dataset.id === '2') {
        headerCarouselImgs.forEach((img, i) => {
          img.style.transform = `translateX(${100 * (i - curCount - 1)}%)`;
        });
      }
    }

    if (curCount === 2) {
      if (e.target.dataset.id === '0') {
        headerCarouselImgs.forEach((img, i) => {
          img.style.transform = `translateX(${100 * (i - curCount + 2)}%)`;
        });
      }
      if (e.target.dataset.id === '1') {
        headerCarouselImgs.forEach((img, i) => {
          img.style.transform = `translateX(${100 * (i - curCount + 1)}%)`;
        });
      }
      if (e.target.dataset.id === '2') {
        headerCarouselImgs.forEach((img, i) => {
          img.style.transform = `translateX(${100 * (i - curCount)}%)`;
        });
      }
    }

    // Add and remove classes to keep the right indicator active.
    headerCarouselIndicators.forEach(i =>
      i.classList.remove('u-carousel-indicators-active')
    );
    i.classList.add('u-carousel-indicators-active');
  });
});

// Clicking pause pauses the carousel and reveals the play button.
carouselIconPause.addEventListener('click', function () {
  slideIntervalManager(false);
  carouselIconPause.classList.add('u-display-none');
  carouselIconPlay.classList.remove('u-display-none');
});

// Clicking the play button starts the carousel again and takes off on whichever image the user is selecting.
carouselIconPlay.addEventListener('click', function () {
  if (
    (curCount === 0 || curCount === 2) &&
    headerCarouselIndicators[1].classList.contains(
      'u-carousel-indicators-active'
    )
  ) {
    curCount = 1;
  }

  if (
    (curCount === 0 || curCount === 1) &&
    headerCarouselIndicators[2].classList.contains(
      'u-carousel-indicators-active'
    )
  ) {
    curCount = 2;
  }

  if (
    (curCount === 1 || curCount === 2) &&
    headerCarouselIndicators[0].classList.contains(
      'u-carousel-indicators-active'
    )
  ) {
    curCount = 0;
  }

  slideIntervalManager(true, slideRight, 3000);
  carouselIconPlay.classList.add('u-display-none');
  carouselIconPause.classList.remove('u-display-none');
});

/*
/////////////////////////////
ABOUT SECTION
/////////////////////////////
*/

const aboutBtn = document.querySelector('.about-section__slide-about-btn');
const whereBtn = document.querySelector('.about-section__slide-where-btn');
const aboutSection = document.querySelector('.about-section__text-about');
const whereSection = document.querySelector('.about-section__text-where');
const aboutSectionContainer = document.querySelector(
  '.about-section__container-about'
);
const whereSectionContainer = document.querySelector(
  '.about-section__container-where'
);

whereBtn.addEventListener('click', () => {
  aboutSection.style.transform = `translateX(100%)`;
  aboutSection.style.opacity = '0';
  aboutSection.style.zIndex = 0;
  whereSection.style.transform = `translateX(0)`;
});

aboutBtn.addEventListener('click', () => {
  aboutSection.style.transform = `translateX(0)`;
  aboutSection.style.opacity = '1';
  aboutSection.style.zIndex = 5;
  whereSection.style.transform = `translateX(-100%)`;
});

/*
/////////////////////////////
TABLET AND MOBILE NAV SECTION
/////////////////////////////
*/

const mobileNavBtn = document.querySelectorAll('.sticky-nav__icon-mobile-nav');

const stickyNav = document.querySelector('.sticky-nav');

mobileNavBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    stickyNav.classList.toggle('nav-open');
  });
});
