'use strict'

let position = 0;

const slidesToShow = 1;
const slidesToScroll = 1;

const container = document.querySelector('.slider-container');
const track = document.querySelector('.slider-track');
const item = document.querySelector('.slider-item');
const itemsCount = document.querySelectorAll('.slider-track > .slider-item').length;

const nextBtn = document.querySelector('.slider-controller__next');
const prevBtn = document.querySelector('.slider-controller__prev');

const itemWidth = container.offsetWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;


// Detect buttons press
nextBtn.addEventListener('click', () => {
    position -= movePosition;
    setPosition();
    checkBtns();
})

prevBtn.addEventListener('click', () =>{
    position += movePosition;
    setPosition();
    checkBtns();
})

// Change slides function
const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
}

const checkBtns = () => {
    nextBtn.disabled = position <= - (itemsCount - slidesToShow) * itemWidth
    prevBtn.disabled = position === 0
}

checkBtns();

console.log(typeof (position))
console.log(typeof (itemsCount))
console.log(typeof (slidesToShow))
console.log(typeof (itemWidth))
