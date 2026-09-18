const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");
const menuIcon = menuButton.querySelector("i");


// ========================================
// MENU MOBILE
// ========================================

menuButton.addEventListener("click", function () {

    if (nav.style.display === "flex") {

        nav.style.setProperty("display", "none", "important");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

        menuButton.setAttribute("aria-label", "Abrir menu");

    } else {

        nav.style.setProperty("display", "flex", "important");

        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");

        menuButton.setAttribute("aria-label", "Fechar menu");

    }

});


// ========================================
// FECHAR MENU AO CLICAR NO LINK
// ========================================

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        nav.style.setProperty("display", "none", "important");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

        menuButton.setAttribute("aria-label", "Abrir menu");

    });

});


// ========================================
// ANIMAÇÕES AO ENTRAR NA TELA
// ========================================

const elementsToAnimate = document.querySelectorAll(
    ".section-header, .service-card, .portfolio-item, .about-content, .about-highlight, .cta"
);

elementsToAnimate.forEach(function (element) {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});


elementsToAnimate.forEach(function (element) {
    observer.observe(element);
});