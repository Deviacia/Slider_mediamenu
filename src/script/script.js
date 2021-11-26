'use strict'

// Get elements
const slider = document.querySelectorAll('.banner-section > .slide');
const nextSlide = document.querySelector('.banner-controller__next');
const prevSlide = document.querySelector('.banner-controller__prev');
const slideCount = 3;

// Get images array
let currentSlideIndex = 0;
let slideIndex = slider[currentSlideIndex];

// Check button click
nextSlide.addEventListener('click', onChangeSlideNext);
prevSlide.addEventListener('click', onChangeSlidePrev);

// Next slide
function onChangeSlideNext() {
    currentSlideIndex++;
    slideIndex = slider[currentSlideIndex];
    console.log(slideIndex);
}

// Prev slide
function onChangeSlidePrev() {
    currentSlideIndex--;
    slideIndex = slider[currentSlideIndex];
    console.log(slideIndex);
}

console.log(slideIndex);
console.log(slider);