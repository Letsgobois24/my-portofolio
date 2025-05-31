
export class hamburgerServices {
    constructor(){
        this.hamburger = document.getElementById('hamburger');
        this.navMenu = document.getElementById('nav-menu');
    }

    onClick(menuFunction){
        this.hamburger.addEventListener('click', menuFunction)
    }

    openMenu(){
        hamburger.classList.toggle('hamburger-active');
        navMenu.classList.toggle('hidden');
    }


}
// Hamburger Menu

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})

// Klik di luar hamburger

window.addEventListener('click', function (e) {
    if (e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});