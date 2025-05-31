// Dark Toogle
export class darkService {
    constructor(){
        this.darkToggle = document.getElementById('dark-toggle');
        this.html = document.querySelector('html');
        this.buttonDarkToggle = darkToggle.firstElementChild;
    }

    setMode() {
        this.darkToggle.addEventListener('click', function () {
            if (this.html.classList.contains('dark')){
                this.html.classList.remove('dark');
                this.buttonDarkToggle.classList.remove('translate-x-4');
                localStorage.theme = "light";
            } else {
                this.html.classList.add('dark');
                this.buttonDarkToggle.classList.add('translate-x-4');
                this.localStorage.theme = "dark";
            }
        });
    }

}
