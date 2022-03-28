"use strict"
// lesson23 Основы ООП, прототипно-ориентированное наследование
console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log("Hello");
    }
};

const jonh = Object.create(soldier); // так правильно мы создаем новый обьект джон, который будет наследоваться от прототипа soldier

// const jonh={
//     health:100
// };

jonh.__proto__ = soldier; //такой формат может встречаться, но не стоит так писать-устаревший формат

Object.setPrototypeOf(jonh, soldier); //первым аргументом тот оьект которому устанавливаем, а второй тот от которого берем

console.log(jonh);
console.log(jonh.armor);
jonh.sayHello();

// ООП это наука о том, как правильно делать архитектуру, также джс можно назвать прототипно-ориентированным языком
// в джс всё строится на прототипах