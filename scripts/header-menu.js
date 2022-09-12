let button = document.getElementById('burger');
let wrp = document.getElementById('menu-wrapper');
let close = document.getElementById('menu-close');

button.addEventListener('click', function(){
    wrp.classList.toggle('display-block');
});
close.addEventListener('click', function(){
    wrp.classList.remove('display-block');
});
