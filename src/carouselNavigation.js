// function that handle the navigation of the carousel

class CarouselItems {
    constructor() {
        this.track = document.querySelector(".carousel-track");
        this.slides = [...document.querySelectorAll(".carousel-slide")];
        this.currentSlide = document.querySelector(".current-slide");
    }
    get slidesWidth() {
        return this.calculateSlideWidth();
    }
    calculateSlideWidth() {
        return this.slides[0].getBoundingClientRect().width;
    }
}

export function moveCarousel(direction) {
    const carousel = new CarouselItems();
    let nextSlide = undefined;
    if (isNaN(direction) === false) {
        nextSlide = document.querySelector(`[data-target="${direction}"]`);
    }
    else if (direction === "left") {
        nextSlide = carousel.currentSlide.previousElementSibling;
        if (nextSlide === null) {
            nextSlide = carousel.slides[carousel.slides.length - 1];
        }
    }
    else {
        nextSlide = carousel.currentSlide.nextElementSibling;
        if (nextSlide === null) {
            nextSlide = carousel.slides[0];
        }
    }
    const amountToMove = nextSlide.style.left;
    carousel.track.style.transform = `translateX(-${amountToMove})`;
    carousel.currentSlide.classList.remove("current-slide");
    nextSlide.classList.add("current-slide");
    setIndicator();
}

function setIndicator() {
    const currentSlide = document.querySelector(".current-slide");
    const currentIndicator = document.querySelector(".current-indicator");
    const index = parseInt(currentSlide.getAttribute("data-target"));
    const nextIndicator = document.querySelector(`[data-indicator="${index}"]`);
    currentIndicator.classList.remove("current-indicator");
    nextIndicator.classList.add("current-indicator");

}

export function setSlidePosition() {
    const carousel = new CarouselItems();
    for (let i = 0; i < carousel.slides.length; i++) {
        carousel.slides[i].style.left = carousel.slidesWidth * i + "px";
    }
}