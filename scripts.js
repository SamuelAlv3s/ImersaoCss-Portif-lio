const btnClose = document.querySelector('.icone-close');
const menu = document.querySelector('.menu');
const btnMenu = document.querySelector('.icone-menu');

btnMenu.addEventListener("click", () =>{
    menu.classList.remove('hide');
});

btnClose.addEventListener("click", () =>{
    menu.classList.add('hide');
});

function typeWrite(element){
    const textArray = element.innerHTML.split('');
    element.innerHTML = ' ';
    textArray.forEach( function(letra, index){
        setTimeout(function(){
            element.innerHTML += letra;
        },100 * index);
    });
}

const title = document.querySelector('.site-title');
typeWrite(title);


