// function to display planet information when the user click on a planet

import planetData from "./planet-data.json";

export default function displayPlanetInformation(index) {
    const planet = planetData[index];
    const content = document.querySelector(".content");
    let planetDataArea = document.querySelector(".planet-data-area");
    if (planetDataArea !== null) {
        planetDataArea.remove();
    }
    planetDataArea = document.createElement("div");
    planetDataArea.classList.add("planet-data-area");

    const name = document.createElement("h2");
    name.classList.add("planet-name");
    name.textContent = planet.name;
    
    const distanceFromSun = document.createElement("p");
    distanceFromSun.textContent = `Distance From Sun: ${planet.distanceFromSun}`;

    const diameter = document.createElement("p");
    diameter.textContent = `Diameter: ${planet.diameter}`;

    const moons = document.createElement("p");
    moons.textContent = `Moons: ${planet.moons}`;

    const rockOrGas = document.createElement("p");
    rockOrGas.textContent = `Type: ${planet.rockOrGas}`;

    const averageTemperature = document.createElement("p");
    averageTemperature.textContent = `Average Temperature: ${planet.averageTemperature}`;

    const habitable = document.createElement("p");
    habitable.textContent = `Average Temperature: ${planet.habitable}`;

    const lengthOfYear = document.createElement("p");
    lengthOfYear.textContent = `Length of Year: ${planet.lengthYear}`;

    const lengthOfDay = document.createElement("p");
    lengthOfDay.textContent = `Length of Day: ${planet.lengthDay}`;

    planetDataArea.appendChild(name);
    const planetDataArray = [distanceFromSun, diameter, moons, rockOrGas, averageTemperature, habitable, lengthOfYear, lengthOfDay];
    for (let i = 0; i < planetDataArray.length; i++) {
        planetDataArray[i].classList.add("planet-info");
        planetDataArea.appendChild(planetDataArray[i]);
    }
    content.appendChild(planetDataArea);

    planetDataArea.scrollIntoView({behavior: "smooth"});
}