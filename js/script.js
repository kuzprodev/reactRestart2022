//lesson 53. (д) Оператор нулевого слияния (Nullish, ??) ES11

'use strict';
// document.addEventListener('DOMContentLoaded', () => {

const box = document.querySelector('.box');
const newHeight = 100;
const newWidth = 400;

const changeParams = (elem, h, w) => {
    elem.style.height = `${h ?? 200}px`;
    elem.style.width = `${w ?? 200}px`;
    elem.innerHTML = (h ?? 100) * (w ?? 300);
};
changeParams(box, newHeight, newWidth);

let userName;
let userKey;
console.log(userName ?? userKey ?? 'User');

// });