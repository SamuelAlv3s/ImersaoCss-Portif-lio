const btnClose = document.querySelector('.icone-close');
const menu = document.querySelector('.menu');
const btnMenu = document.querySelector('.icone-menu');

btnMenu.addEventListener("click", () =>{
    menu.classList.remove('hide');
});

btnClose.addEventListener("click", () =>{
    menu.classList.add('hide');
});