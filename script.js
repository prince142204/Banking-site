let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function changeSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    slides[currentSlide].classList.add('active');
});











//  butte slider





const textSlider = new bootstrap.Carousel(document.querySelector('#textSlider'), {
    interval: 3000, // Adjust slide interval time (in milliseconds)
    wrap: true     // Set to true to loop back to the beginning
  });
  