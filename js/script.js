"use strict"
// lesson22 Передача по ссылке или значению, Spread оператор(ES6-ES9)
let a = 5;
b = a;
b = d + 5;
console.log(b, a);
// const obj = {
//     a: 5,
//     b: 1
// }

// const copy = obj;
// copy.a = 10;
// console.log(copy);
// console.log(obj);
//  в объектах если меняешь копию, то и оригин меняется
//  тоесть когда мы работаем с примитивными типами данных они передаются по значению
// а когда мы работаем с обьектами(массивы функции и типа обьекты даты) идет передача по ссылке

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
        return objCopy;
    }
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};
const newNumbers = copy(numbers);
newNumbers.a = 10;
newNumbers.a.x = 10;
console.log(newNumbers);
console.log(numbers);


const add = {
    d: 17,
    e: 20
};

// console.log(Object.assign(numbers, add));
const clone = Object.assign({}, add); //так можно тоже создавать копии обьектов
clone.d = 21;
console.log(add);
console.log(clone);


// создатькопию массива:
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'addss';
console.log(newArray);
console.log(oldArray);

// оператор разворота spread - разворачивает структуру и превращает в набор каких-то данных
const video = ['youtube', 'vumeo', 'rutube'],
    blogs = ['wordpress', 'livejornal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook']; //просто вытаскиваем элементы и они вставляются в переменную internet через запяту
console.log(internet);


function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [1, 2, 3];

log(...num);



const array = ['a', 'b'];
const newAarray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {
    ...q
};