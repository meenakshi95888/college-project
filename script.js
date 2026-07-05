

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
});


// ================================
// TYPING EFFECT
// ================================

const typingText = document.getElementById("typing-text");

const words = [
    "Frontend Developer",
    "Blockchain Student",
    "React Developer",
    "JavaScript Enthusiast",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

    }

    setTimeout(typeEffect, deleting ? 70 : 120);

}

typeEffect();


// ================================
// SCROLL TO TOP
// ================================

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ================================
// SCROLL REVEAL
// ================================

const sections = document.querySelectorAll("section");

function revealSections() {

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 120) {
            section.classList.add("show");
        }

    });

}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);


// ================================
// SKILL BAR ANIMATION
// ================================

const progressBars = document.querySelectorAll(".progress span");

function animateSkills() {

    progressBars.forEach(bar => {

        const top = bar.getBoundingClientRect().top;

        if (top < window.innerHeight - 50) {

            bar.style.width = bar.dataset.width;

        }

    });

}

window.addEventListener("scroll", animateSkills);
window.addEventListener("load", animateSkills);


// ================================
// ACTIVE NAVIGATION
// ================================

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ================================
// CONTACT FORM
// ================================

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const inputs = form.querySelectorAll("input, textarea");

    let valid = true;

    inputs.forEach(input => {

        if (input.value.trim() === "") {
            valid = false;
            input.style.border = "2px solid red";
        } else {
            input.style.border = "2px solid #8b5cf6";
        }

    });

    if (valid) {

        alert("Thank you! Your message has been submitted successfully.");

        form.reset();

        inputs.forEach(input => {
            input.style.border = "none";
        });

    }

});


const cards = document.querySelectorAll(
    ".project-card, .skill-card, .info-card"
);

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});


const heroImage = document.querySelector(".image-box");

window.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.pageX) / 40;
    const y = (window.innerHeight / 2 - e.pageY) / 40;

    heroImage.style.transform = `translate(${x}px, ${y}px)`;

});


