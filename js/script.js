//lesson 63. ClassList и делегирование событий
'use strict';
// document.addEventListener('DOMContentLoaded', () => {
const btns = document.querySelectorAll('button');
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
console.log(btns[0].className);
// part 2 -делегирование событий








// });