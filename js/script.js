//lesson 55. (д) Живые коллекции и полезные методы

'use strict';
// document.addEventListener('DOMContentLoaded', () => {
const boxesQuery = document.querySelectorAll('.box');
const boxesGet = document.getElementsByClassName('box');

boxesQuery.forEach(box =>{
if(box.matches('.this')){
console.log('This one!');
}
    // if(box.matches('.this')) console.log('This one!');
});
console.log(boxesQuery[0].closest('.wrapper'));

boxesQuery[0].remove();
boxesGet[0].remove();

for (let i = 0; i < 5; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    document.body.append(div);
    boxesGet[boxesGet.length] = div; //будет ошибка, так как напрямую работать с штмл коллекцией нельзя,
    // запрещено синтаксисом джаваскриптв
}

console.log(boxesQuery);
console.log(boxesGet);
// console.log(document.body.children);

console.log(Array.from(boxesGet)); //создать массив из массивоподобного обьекта

// });