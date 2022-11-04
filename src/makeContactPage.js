// function for creating the contact page when the user clicks that

export default function makeContactPage() {
    const content = document.querySelector(".content");

    const form = document.createElement("form");
    form.action = "/";
    form.method = "post";
    form.classList.add("form");

    const contactHeading = document.createElement("h2");
    contactHeading.classList.add("contact-heading");
    contactHeading.textContent = "Contact Us.";

    const contactExtra = document.createElement("h3");
    contactExtra.classList.add("contact-extra");
    contactExtra.textContent = "Let us know what you think and we'll get back to you soon."

    const textArea = document.createElement("textarea");
    textArea.classList.add("text-area");
    textArea.id = "user-input";
    textArea.rows = 5;
    textArea.cols = 50;

    const bottomRowForm = document.createElement("div");
    bottomRowForm.classList.add("bottom-row-form");

    const emailLabel = document.createElement("label");
    emailLabel.classList.add("email-label");
    emailLabel.setAttribute("for", "email");
    emailLabel.textContent = "email:";

    const emailInput = document.createElement("input");
    emailInput.type = "text";
    emailInput.maxLength = 50;
    emailInput.placeholder = "email";
    emailInput.id = "email";
    emailInput.name = "email";
    emailInput.classList.add("email");
    emailInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            validateForm();
        }
        else {
            validateEmailInput();
        }
    });

    const submitButton = document.createElement("button");
    submitButton.classList.add("submit-button");
    submitButton.textContent = "Submit";
    submitButton.addEventListener("click", (e) => {
        e.preventDefault();
        validateForm();
    });

    const emailMessage = document.createElement("small");
    emailMessage.classList.add("email-message");

    const lastRowElements = [emailLabel, emailInput, submitButton, emailMessage];
    for (let i = 0; i <lastRowElements.length; i++) {
        bottomRowForm.appendChild(lastRowElements[i]);
    }

    const formElements = [contactHeading, contactExtra, textArea, bottomRowForm];
    for (let i = 0; i < formElements.length; i++) {
        form.appendChild(formElements[i]);
    }

    content.appendChild(form);
}

function validateEmailInput() {
    const email = document.querySelector("#email").value;
    const emailMessage = document.querySelector(".email-message");
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(email).toLowerCase()) === false) {
        emailMessage.textContent = "*Enter a valid email";
        emailMessage.style.color = "#dc2626";
        emailMessage.style.visibility = "visible";
    }
    else {
        emailMessage.textContent = "*Valid email";
        emailMessage.style.color = "#16a34a";
        emailMessage.style.visibility = "visible";
    }
}

function validateForm() {
    validateEmailInput();
    const textArea = document.querySelector(".text-area");
    if (textArea.value === "") {
        textArea.style.border = "2px solid #dc2626";
    }
    else {
        textArea.style.border = "2px solid #16a34a";
    }
}