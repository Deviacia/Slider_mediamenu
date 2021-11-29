'use strict'

// Get elements
const slider = document.querySelectorAll('.banner-section > .slide');
const nextSlide = document.querySelector('.banner-controller__next');
const prevSlide = document.querySelector('.banner-controller__prev');

const zeroSlide = 0;
const slideCount = 2; // 0 = 1, 1 = 2, 2 = 3 ...

// Get images array
let currentSlideIndex = 0;
let slideIndex = slider[currentSlideIndex];
let lastEl = slider[slider - 1];


// Check button click
nextSlide.addEventListener('click', onChangeSlideNext);
prevSlide.addEventListener('click', onChangeSlidePrev);

// Next slide
function onChangeSlideNext() {
    slideIndex = slider[currentSlideIndex];
    // currentSlideIndex++;
    
    if (currentSlideIndex >= slideCount && currentSlideIndex <= slideCount) {
        slideIndex = slider[0];
        currentSlideIndex = 1;
    }

    else {
        currentSlideIndex++;
    }
    
    console.log(currentSlideIndex);
    console.log(slideIndex);
}

// Prev slide
function onChangeSlidePrev() {
    // currentSlideIndex--;
    slideIndex = slider[currentSlideIndex];

    if (currentSlideIndex > zeroSlide || currentSlideIndex < slideCount) {
        currentSlideIndex--;
    }

    // else {
    //     slideIndex = lastEl;
    // }


    console.log(currentSlideIndex);
    console.log(slideIndex);
}

console.log(slideIndex);
console.log(slider);