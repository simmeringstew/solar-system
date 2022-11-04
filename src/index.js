import "./meyer-reset.css";
import "./style.css";
import makeHomePage from "./makeHomePage";
import makePlantesPage from "./makePlanetsPage";
import makeContactPage from "./makeContactPage";

// global variable for the currently active page set to 0 which is home
let currentPage = 0;

// selector for main page content
const content = document.querySelector(".content");

// on page load load up the home page
window.onload = () => {
    currentPage = 0;
    makeHomePage();
}

// selector for the list items
const list = document.querySelectorAll(".list");
list.forEach(item => {
    item.addEventListener("click", changePage);
});

// function for changing the page
function changePage() {
    list.forEach(item => {
        item.classList.remove("active");
        this.classList.add("active");
        const page = parseInt(this.getAttribute("data-key"));
        if (page === currentPage) {
            return;
        }
        else {
            currentPage = page;
            content.innerHTML = "";
            switch(page) {
                case 0:
                    makeHomePage();
                    break;
                case 1:
                    makePlantesPage();
                    break;
                case 2:
                    makeContactPage();
                    break;
            }
        }
    });
}