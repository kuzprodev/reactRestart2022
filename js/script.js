// lesson 45. События и их обработчики
'use strict';

const btn = document.querySelector('button'),
overlay = document.querySelector('.overlay'),
btns =document.querySelectorAll('button');


// btn.onclick = function () { //але так вже не робиться застаріла версія- може спрацювати тільки
//     // один раз-останній+неможливо видалити подію
//     alert('Click');
// };
// btn.onclick = function () { //але так вже не робиться застаріла версія- може спрацювати тільки
//     // один раз-останній+неможливо видалити подію
//     alert('Second Click');
// };

// btn.addEventListener('click', () => {
//     alert('new click');
// });
// btn.addEventListener('click', () => {
//     alert('new second click');
// });
// btn.addEventListener('mouseenter', (e) => {
//     console.log(e);
//     console.log(e.target);
//     // e.target.remove();
//     console.log('hover');
// });
// let i = 0;
const deleteElement = (e) => {
    // e.target.remove();
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.type); //тип события
    // i++;
    // if (i === 1) {
    //     btn.removeEventListener('click', deleteElement); //удаление обработчика
    // }
};

// btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);

const link =document.querySelector('a');
link.addEventListener('click', (e)=>{
   e.preventDefault(); //отмена стандартного поведения
    console.log(e.target);
});
btns.forEach(btn=>{
    btn.addEventListener('click', deleteElement,{once:true} ); //у события есть третья опция(аргумент)
});