//lesson 57. (д) Дескрипторы свойств и полезные методы объектов

'use strict';
// document.addEventListener('DOMContentLoaded', () => {
const birthday = Symbol('birthday');
const user = {
    name: 'Alex', surname: 'Smith',
    birthday: '20/04/1993',
    // [birthday]:'20/04/1993' ,
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`);
    }

};
Object.defineProperty(user, 'birthday', {writable: false});
// Object.defineProperty(user, 'birthday', {value: prompt('Date?'), enumerable: true,configurable: true});

console.log(Object.getOwnPropertyDescriptor(user, 'birthday'));


console.log(Object.getOwnPropertyDescriptor(user, 'name'));
Object.defineProperty(user, 'name', {writable: false}); //можем читать, но не можем изменять
// user.name = 'frw'; //можем читать, но не можем изменять

Object.defineProperty(user, 'gender', {value: 'male'}); //создается новое свойство если такого названия ещё не было
console.log(Object.getOwnPropertyDescriptor(user, 'gender'));

Object.defineProperty(user, 'showMyPublicData', {enumerable: false});
for(let key in user) console.log(key);
// console.log(Object.getOwnPropertyDescriptor(user, birthday));

console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));


Object.defineProperties(user, {
    name: {writable:false},
    surname: {writable:true}
});


//flags:
//1) writable, если этот параметр будет стоять в параметре true, то св-ва в объекте можно будет изменить
// или если false- то будет только для чтения
//2) enumerable если в true, то св-ва будут перечисляться в циклах, если нет то циклы будут игнорить
//3) configurable, если true, то св-ва можно удалить, а его атрибуты изменить, иначе нет
// изначально стоят в позиции true







// });