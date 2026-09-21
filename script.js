// =========================================
// NAVBAR SCROLL EFFECT
// =========================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(10, 10, 10, 0.98)";
    } else {
        navbar.style.background = "rgba(17, 17, 17, 0.96)";
    }
});


// =========================================
// MOBILE NAVBAR CLOSE
// =========================================

const navLinks = document.querySelectorAll(".nav-link");
const navbarCollapse = document.querySelector(".navbar-collapse");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        if (navbarCollapse.classList.contains("show")) {
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);

            if (bsCollapse) {
                bsCollapse.hide();
            }
        }
    });
});


// =========================================
// SCROLL REVEAL
// =========================================

const revealElements = document.querySelectorAll(
    ".service-card, .why-card, .contact-card, .gallery-item, .about-content"
);

const observer = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(function (element) {
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);
});


// =========================================
// CURRENT YEAR
// =========================================

const copyright = document.querySelector(".copyright");

if (copyright) {
    copyright.innerHTML =
        `© ${new Date().getFullYear()} Royal Salon. All Rights Reserved.`;
}