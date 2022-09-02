//lesson 63. ClassList и делегирование событий
'use strict';
// document.addEventListener('DOMContentLoaded', () => {
const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.btn-block');
// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0)); //получение класса по индексу
// btns[0].classList.add('red', 'second', 'thr');
// // btns[0].classList.remove('blue');
// btns[0].classList.toggle('blue');
// console.log(btns[1].classList.add('red'));


// contains -позволяет проверять есть ли класс и возвращает булиновое значение
// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }
btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }
    btns[1].classList.toggle('red');
});

// className не стоит использовать вообще
// console.log(btns[0].className);
// part 2 -делегирование событий


wrapper.addEventListener('click', (event) => {
    // console.dir(event.target);
    // if (event.target && event.target.tagName == 'BUTTON') {
    if (event.target && event.target.matches('button.red')) {
        console.log('любимый прием гугла');
    };
    if (event.target && event.target.classList.contains('blue')) {
        console.log('click to blue btn');
    };
    if (event.target && event.target.classList.contains('red')) {
        console.log('click to red btn');
    };
});


// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log('hello');
//     })
// });


const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);







// });