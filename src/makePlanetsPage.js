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

    const carousel = document.createElement("div");
    carousel.classList.add("carousel");

    const left = document.createElement("button");
    left.classList.add("material-symbols-outlined");
    left.textContent = "chevron_left";
    left.classList.add("carousel-button");
    left.classList.add("left");

    const carouselContainer = document.createElement("div");
    carouselContainer.classList.add("carousel-track-container");

    const carouselTrack = document.createElement("ul");
    carouselTrack.classList.add("carousel-track");

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
    const carouselNavigation = document.createElement("div");
    carouselNavigation.classList.add("carousel-navigation");
    for (let i = 0; i < planetArray.length; i++) {
        planetArray[i].classList.add("carousel-image");
        const carouselSlide = document.createElement("li");
        carouselSlide.classList.add("carousel-slide");
        carouselSlide.setAttribute("data-key", `${i}`);
        carouselSlide.appendChild(planetArray[i]);
        carouselTrack.appendChild(carouselSlide);
        const carouselIndicator = document.createElement("button");
        carouselIndicator.classList.add("carousel-indicator");
        if (i === 0) {
            carouselIndicator.classList.add("current-slide");
        }
        carouselNavigation.appendChild(carouselIndicator);
    }

    const right = document.createElement("button");
    right.classList.add("material-symbols-outlined");
    right.textContent = "chevron_right";
    right.classList.add("carousel-button");
    right.classList.add("right");

    carouselContainer.appendChild(carouselTrack);

    carousel.appendChild(left);
    carousel.appendChild(carouselContainer);
    carousel.appendChild(right);
    carousel.appendChild(carouselNavigation);
    content.appendChild(carousel);
}