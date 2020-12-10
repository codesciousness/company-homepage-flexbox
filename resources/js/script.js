let slideIndex = 0;

const showSlides = () => {
    let i;
    const slides = document.getElementsByClassName('main__slides');
    const dots = document.getElementsByClassName('main__dots');
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' -active', '');
    }
    slides[slideIndex-1].style.display = 'block';
    dots[slideIndex-1].className += ' -active';
    setTimeout(showSlides, 5000);
}

window.onload = showSlides;

const carousel = document.querySelector('.main__carousel')
const prevButton = document.querySelector('.fa-chevron-left');
const nextButton = document.querySelector('.fa-chevron-right');
const radius = 250;
const theta = 90;
let selectedIndex = 0;

const rotateCarousel = () => {
  let angle = theta * selectedIndex * -1;
  carousel.style.transform = `translateZ(-${radius}px) rotateY(${angle}deg)`;
}

const previous = () => {
  selectedIndex--;
  rotateCarousel();
}

const next = () => {
  selectedIndex++;
  rotateCarousel();
}

prevButton.onclick = previous;
nextButton.onclick = next;
