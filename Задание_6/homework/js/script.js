let menu = document.getElementsByClassName('menu')[0],
    menuItem = document.getElementsByClassName('menu-item'),
    menuItemLi = document.createElement('li'),
    title = document.getElementById('title'),
    adv = document.getElementsByClassName('adv')[0],
    promptForApple = document.querySelector('#prompt');

menu.insertBefore(menuItem[2], menuItem[1]);
menuItemLi.classList.add('menu-item');
menuItemLi.textContent = 'Пятый пункт';
menu.appendChild(menuItemLi);

document.body.style.background = "url(../img/apple_true.jpg) center no-repeat";

title.textContent = 'Мы продаем только подлинную технику Apple';

adv.remove();

let yourOpinion = prompt('Ваше отношение к технике Apple?');

promptForApple.textContent = yourOpinion;