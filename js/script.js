// lesson 43. Действия с элементами на странице
'use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelectorAll('.heart'),
    wrapper = document.querySelector('.wrapper');

// console.dir(box);
box.style.backgroundColor = 'blue';
box.style.width = '500px';
let num = 333
box.style.cssText = `background-color: blue; width: ${num}px`;


btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for(let i =0; i < hearts.length; i++){
//     hearts[i].style.backgroundColor = 'blue';
// }  // почти не будем использовать, так как есть спец переберающие методы

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});


const div = document.createElement('div');
// const text = document.createTextNode('Тут был Я')


div.classList.add('black');

// document.body.append(div);
// document.querySelector('.wrapper').append(div);
wrapper.append(div);  //вставляет в конец блока
wrapper.prepend(div);  //вставляет в начало блока
wrapper.appendChild(div);


hearts[1].before(div);  // перед блоком
hearts[1].after(div);   //после блока


wrapper.insertBefore(div, hearts[0]);//старый метод  //первый аргумент-что вставляем, второй аргумент -перед каким элементом вставляем


circles[0].remove();  // метод удаление элемента
wrapper.removeChild(hearts[1]);//старый метод

hearts[0].replaceWith(circles[0]);  //метод заменить один элемент другим
// wrapper.replaceChild(circles[1], hearts[0]);  //старый метод 1-на который поменять,2-тот который меняется



div.innerHTML='<h1>Hello World</h1>';

// div.textContent = 'Hello'; //только с текстом


div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>'); //перед элементом
div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>'); // первым внутрь элемента
div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>'); // последним внутрь элемента
div.insertAdjacentHTML('afterend', '<h2>Hello</h2>'); // после элемента