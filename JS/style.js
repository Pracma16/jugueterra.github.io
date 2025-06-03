// const track = document.querySelector('.slider-track');
// const prevBtn = document.querySelector('.slider-btn.prev');
// const nextBtn = document.querySelector('.slider-btn.next');
// let slides = document.querySelectorAll('.slider-track .category');
// let currentIndex = 0;
// let totalSlides = slides.length;

// Clona para efecto infinito
// function cloneSlides() {
//   const first = slides[0].cloneNode(true);
//   const last = slides[totalSlides - 1].cloneNode(true);
//   track.appendChild(first);
//   track.insertBefore(last, slides[0]);
//   slides = document.querySelectorAll('.slider-track .category');
// }

// function updateSlider() {
//   const slideWidth = slides[0].offsetWidth;
//   track.style.transform = `translateX(-${(currentIndex + 1) * slideWidth}px)`;
// }

// function nextSlide() {
//   currentIndex++;
//   if (currentIndex >= totalSlides) {
//     track.style.transition = 'none';
//     currentIndex = 0;
//     updateSlider();
//     setTimeout(() => {
//       track.style.transition = 'transform 0.5s ease';
//       currentIndex++;
//       updateSlider();
//     }, 50);
//   } else {
//     updateSlider();
//   }
// }

// function prevSlide() {
//   currentIndex--;
//   if (currentIndex < 0) {
//     track.style.transition = 'none';
//     currentIndex = totalSlides - 1;
//     updateSlider();
//     setTimeout(() => {
//       track.style.transition = 'transform 0.5s ease';
//       currentIndex--;
//       updateSlider();
//     }, 50);
//   } else {
//     updateSlider();
//   }
// }

// nextBtn.addEventListener('click', nextSlide);
// prevBtn.addEventListener('click', prevSlide);

// window.addEventListener('load', () => {
//   cloneSlides();
//   updateSlider();
// });
