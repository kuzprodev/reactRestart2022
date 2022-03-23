"use strict";
let num = 20; //глобальная переменная

function showFirstMessage(text) {
    console.log(text);
    let num = 33; //локальная фун-ия сущ только внутри функции, внутри фигурных стрелок
    num = 10; //перезаписываем глобальную переменную



    console.log(num);
}
showFirstMessage("Hello world!");
console.log(num);

function calc(a, b) {
    return (a + b)
}
console.log(calc(5, 6));
console.log(calc(10, 7));

function ret() {
    let num = 77;
    return num;
} //так возвращается из функции при помощи return переменная или какие-то еще значения
const anotherNum = ret();
console.log(anotherNum);
const logger = function () {
    console.log("Hello");
};
logger();

const calc = (a, b) =>{return a + b};