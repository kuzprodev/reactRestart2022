//lesson 56. (д) Тип данных Symbol

'use strict';
// document.addEventListener('DOMContentLoaded', () => {
// let id = Symbol('id');
// const obj = {
//     name: 'Test',
//     // [Symbol('id')] : 1
//     [id]: 1,
//     getId: function(){
//         return this[id];
//     }
// };
// // let id = Symbol("id");
// // obj[id] = 1;
// // console.log(obj[id]);
// console.log(obj);
// // console.log(obj.getId());
// console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);
// // console.log(obj[id]);
// for( let value in obj) console.log(value);


//part two

const myAwesomeDB = {
    movies: [],
    actors: [],
    // [Symbol('id')]: 123
    [Symbol.for('id')]: 123
};
// Сторонний код библиотеки

myAwesomeDB.id = '1234342414';

// console.log(myAwesomeDB['id']);
console.log(myAwesomeDB[Symbol.for('id')]);
console.log(myAwesomeDB);

// });