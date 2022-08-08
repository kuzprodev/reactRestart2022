// lesson 49. События на мобильных устройствах
'use strict';
document.addEventListener('DOMContentLoaded', () => {

//touchstart
//touchmove
//touchend
//touchenter
//touchleave
//touchcancel


    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('Start');
        console.log(e.toches);
    });
    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log('Move');
        console.log(e.targetTouches[0].pageX);
    });
    box.addEventListener('touchend', (e) => {
        e.preventDefault();
        console.log('End');
    });
    //touches  свойство выдаёт список всех пальцев, которые сейчас взаимодействуют с экраном
    //targetTouches св-во выдаёт список пальцев, которые взаимодействуют с конкретнвм элементом
    //changedTouches -список пальцев, которые участвуют в текущем событии (например если убрать один из 4 пальцев,
    // то выдаст этот палец в список)
});