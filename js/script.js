const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('menu_active');
});

close.addEventListener('click', () => {
    menu.classList.remove('menu_active');
});

const counters = document.querySelectorAll('.percent__number'),
    lines = document.querySelectorAll('.percent__hud span')

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});




setInterval(function() {
    document.getElementById("sliders").className = "promo_1";
}, 5000);

setInterval(function() {
    document.getElementById("sliders").className = "promo_2";
}, 10000);

setInterval(function() {
    document.getElementById("sliders").className = "promo_3";
}, 15000);

setInterval(function() {
    document.getElementById("sliders").className = "promo";
}, 20000);