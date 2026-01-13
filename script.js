const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const themeToggle = document.querySelector(".theme-toggle");
const body = document.body;
const yearSpan = document.getElementById("year");
const contactForm = document.getElementById("contactForm");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

const storedTheme = localStorage.getItem("theme");
if (storedTheme === "dark") {
  body.classList.remove("theme-light");
  body.classList.add("theme-dark");
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isDark = body.classList.toggle("theme-dark");
    if (!isDark) {
      body.classList.add("theme-light");
      localStorage.setItem("theme", "light");
    } else {
      body.classList.remove("theme-light");
      localStorage.setItem("theme", "dark");
    }
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameInput = contactForm.querySelector("#name");
    const emailInput = contactForm.querySelector("#email");
    const messageInput = contactForm.querySelector("#message");

    const nameError = nameInput.nextElementSibling;
    const emailError = emailInput.nextElementSibling;
    const messageError = messageInput.nextElementSibling;

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    let isValid = true;

    if (!nameInput.value.trim()) {
      nameError.textContent = "Please enter your name.";
      isValid = false;
    }

    const emailValue = emailInput.value.trim();
    if (!emailValue) {
      emailError.textContent = "Please enter your email address.";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(emailValue)) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    }

    if (!messageInput.value.trim()) {
      messageError.textContent = "Please enter a message.";
      isValid = false;
    }

    const successMessage = document.getElementById("formSuccess");

    if (isValid) {
      if (successMessage) {
        successMessage.hidden = false;
      }
      contactForm.reset();
    } else if (successMessage) {
      successMessage.hidden = true;
    }
  });
}