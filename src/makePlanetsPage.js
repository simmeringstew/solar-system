// function to create the planets page

import Mercury from "./planet-images/mercury.png";

export default function makePlanetsPage() {
    const content = document.querySelector(".content");
    const mercury = new Image();
    mercury.src = Mercury;
    content.appendChild(mercury);
}