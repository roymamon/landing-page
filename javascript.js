// Select the button and the info section
const toggleButton = document.getElementById("theme-toggle");
const infoSection = document.querySelector(".info-section");
const quoteSection = document.querySelector(".quote-section");
const body = document.body;


// Add an event listener to toggle dark mode for the info section
toggleButton.addEventListener("click", () => {
    infoSection.classList.toggle("dark-mode"); // Toggles the dark-mode class
    quoteSection.classList.toggle("dark-mode");
    body.classList.toggle("dark-mode");
});
