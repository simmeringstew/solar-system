// function for dynamically creating the home page

export default function makeHomePage() {
    const content = document.querySelector(".content");
    const home = document.createElement("div");
    home.classList.add("home");
    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "Explore our solar system.";
    const call = document.createElement("h2");
    call.classList.add("call");
    call.textContent = "Click the planet icon to get started.";

    home.appendChild(title);
    home.appendChild(call);
    content.appendChild(home);
}