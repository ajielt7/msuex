let openMenu = document.querySelector('.open')
let mainMenu = document.querySelector('.collapse')
let closeMenu = document.querySelector('.close')

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
    mainMenu.style.left = '0';
}

function close() {
    mainMenu.style.left = '-100%';
}

window.addEventListener("scroll", function () {
    let header = document.querySelector("nav");
    header.classList.toggle("stiky", window.scrollY > 100);
});