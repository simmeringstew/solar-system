// function to create the planets page

import Mercury from "./planet-images/mercury.png";
import Venus from "./planet-images/venus.jpeg";
import Earth from "./planet-images/earth.jpeg";
import Mars from "./planet-images/mars.jpeg";
import Jupiter from "./planet-images/jupiter.jpeg";
import Saturn from "./planet-images/saturn.jpeg";
import Uranus from "./planet-images/uranus.jpeg";
import Neptune from "./planet-images/neptune.jpeg";

export default function makePlanetsPage() {
    const content = document.querySelector(".content");

    // creating the wrapper and the carousel
    const carouselWrapper = document.createElement("div");
    carouselWrapper.classList.add("carousel-wrapper");
    const carousel = document.createElement("div");
    carousel.classList.add("carousel");

    // image creators
    const mercury = new Image();
    mercury.src = Mercury;
    const venus = new Image();
    venus.src = Venus;
    const earth = new Image();
    earth.src = Earth;
    const mars = new Image();
    mars.src = Mars;
    const jupiter = new Image();
    jupiter.src = Jupiter;
    const saturn = new Image();
    saturn.src = Saturn;
    const uranus = new Image();
    uranus.src = Uranus;
    const neptune = new Image();
    neptune.src = Neptune;

    const planetArray = [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune];
    planetArray[0].classList.add("active-image");
    for (let i = 0; i < planetArray.length; i++) {
        planetArray[i].classList.add("carousel-image");
        planetArray[i].setAttribute("data-key", `${i}`);
        // add in event listner here for clicking
        carousel.appendChild(planetArray[i]);
    }

    // creating the carousel buttons
    const next = document.createElement("div");
    next.classList.add("carousel-button--next");
    next.addEventListener("click", () => {
        resetImageClasses(planetArray);
        nextImage(planetArray);
    });
    const prev = document.createElement("div");
    prev.classList.add("carousel-button--prev");
    prev.addEventListener("click", () => {
        resetImageClasses(planetArray);
        previousImage(planetArray);
    });

    carousel.appendChild(next);
    carousel.appendChild(prev);
    carouselWrapper.appendChild(carousel);
    content.appendChild(carouselWrapper);
}

function resetImageClasses(planetArray) {
    for (let i = 0; i < planetArray.length; i++) {
        planetArray[i].classList.remove("prev");
        planetArray[i].classList.remove("next");
    }
}

function nextImage(planetArray) {
    const currentImage = document.querySelector(".active-image");
    const imageIndex = parseInt(currentImage.getAttribute("data-key"));
    if (imageIndex !== 7) {
        planetArray[imageIndex].classList.remove("active-image");
        planetArray[imageIndex].classList.add("prev");
        planetArray[imageIndex + 1].classList.add("active-image");
    }
    else {
        planetArray[imageIndex].classList.remove("active-image");
        planetArray[imageIndex].classList.add("prev");
        planetArray[0].classList.add("active-image");
    }
}

function previousImage(planetArray) {
    const currentImage = document.querySelector(".active-image");
    const imageIndex = parseInt(currentImage.getAttribute("data-key"));
    if (imageIndex !== 0) {
        planetArray[imageIndex].classList.remove("active-image");
        planetArray[imageIndex].classList.add("next");
        planetArray[imageIndex - 1].classList.add("active-image");
    }
    else {
        planetArray[imageIndex].classList.remove("active-image");
        planetArray[imageIndex].classList.add("next");
        planetArray[planetArray.length - 1].classList.add("active-image");
    }
}