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

export function moveLeftOrRight(direction) {
    const carousel = new CarouselItems();
    let nextSlide = undefined;
    if (direction === "left") {
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
}

export function moveToSpecific() {
    const carousel = new CarouselItems();
    const index = this.getAttribute("data-key");

}

export function setSlidePosition() {
    const carousel = new CarouselItems();
    for (let i = 0; i < carousel.slides.length; i++) {
        carousel.slides[i].style.left = carousel.slidesWidth * i + "px";
    }
}