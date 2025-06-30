// Import CSS
import '../css/style.css';

// Dark Toogle
const darkToggle = document.getElementById('dark-toggle');
const html = document.querySelector('html');
const buttonDarkToggle = darkToggle.firstElementChild;
const toTop = document.getElementById('to-top');

darkToggle.addEventListener('click', function () {
    if (html.classList.contains('dark')){
        html.classList.remove('dark');
        buttonDarkToggle.classList.remove('translate-x-4');
        localStorage.theme = "light";
    } else {
        html.classList.add('dark');
        buttonDarkToggle.classList.add('translate-x-4');
        localStorage.theme = "dark";
    }
});

if (html.classList.contains('dark')){
    buttonDarkToggle.classList.add('translate-x-4');
}


let isScrollingToTop = false;

// Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (isScrollingToTop) return;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.add('flex');
        toTop.classList.remove('hidden');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}

// Hidden toTop after clicking
toTop.addEventListener('click', function () {
    isScrollingToTop = true;
    toTop.classList.add('hidden');
    toTop.classList.remove('flex');

    // Tunggu hingga scroll selesai
    const checkIfAtTop = setInterval(() => {
        if (window.pageYOffset === 0) {
            isScrollingToTop = false;
            clearInterval(checkIfAtTop);
        }
    }, 100);
});

// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
    console.log('ok');
})

// Klik di luar hamburger
window.addEventListener('click', function (e) {
    if (e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});