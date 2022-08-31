 //lesson 61. (*) BigInt
 'use strict';
 // document.addEventListener('DOMContentLoaded', () => {
console.log(Number.MAX_SAFE_INTEGER);   //максимально доступное число с которым js может работать, если нужны числа больше то BigInt


// const bigint = 1313442439509509539539035905309359035309353n; //перевести в bigInt в конце n
// console.log(typeof(bigint)); //нельзя смешивать с обычными числами и использовать math

const someBigInt = BigInt(1313442439509509539539035905309359035309353);  //и эта команда может принимать строки и конвертить в число

// console.log(5n + 6);
// console.log(Math.round(5n));


console.log(1n + 3n);


let bigint = 1n;
let number = 2;
 console.log(bigint + BigInt(number));
 console.log(Number(bigint) + number);

 // });