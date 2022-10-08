/* Mobile Burger Menu */

const menuBurger = document.querySelector(".burger-menu");
const mobileNav = document.querySelector(".mobile-nav");
const body = document.querySelector("body");

// Клик по кнопке
menuBurger.addEventListener("click", event => {
    event.stopPropagation();

    toggleMobileNav();
});

// Клик по окну за пределами навигации
window.addEventListener("click", event => {
    if (body.classList.contains("no-scroll")) {
        toggleMobileNav();
    }
});

// Останавливаем клик внутри открытой мобильной навигации
mobileNav.addEventListener("click", event => {
    event.stopPropagation();
});

const toggleMobileNav = () => {
    mobileNav.classList.toggle("mobile-nav-active");
    menuBurger.classList.toggle("burger-menu-close");
    body.classList.toggle("no-scroll");
}

// SCROLL REVEAL ANIMATION

const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 100,
    // reset: true
})

sr.reveal(`.intro-title, .footer-row`);
sr.reveal(`.intro-subtitle`, {delay: 200});
sr.reveal(`.intro-scroll`, {delay: 300});
sr.reveal(`.article__content-one, .article__content-three, .article__img-two`, {origin: "left"});
sr.reveal(`.article__content-two, .article__img-one, .article__img-three`, {origin: "right"});



