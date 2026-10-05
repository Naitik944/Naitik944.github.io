// =========================
// THEME TOGGLE
// =========================

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    const isLight = document.body.classList.contains("light");

    localStorage.setItem("theme", isLight ? "light" : "dark");

    themeToggle.textContent = isLight ? "☀" : "◐";
});


// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light");
    themeToggle.textContent = "☀";
}


// =========================
// CURRENT YEAR
// =========================

document.getElementById("year").textContent =
    new Date().getFullYear();


// =========================
// TYPING EFFECT
// =========================

const typingElement = document.querySelector(".typing-text");

const phrases = [
    "AI/ML Engineering",
    "Software Engineering",
    "Problem Solving",
    "Building Projects"
];

let phraseIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentPhrase = phrases[phraseIndex];

    if (!deleting) {

        typingElement.textContent =
            currentPhrase.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentPhrase.length) {
            deleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentPhrase.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {
            deleting = false;

            phraseIndex =
                (phraseIndex + 1) % phrases.length;
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 45 : 85
    );
}

typeEffect();
