//lesson 58. (*) Итерируемые конструкции

'use strict';
// document.addEventListener('DOMContentLoaded', () => {

const user = {
    name: 'Alex', surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`);
    }

};
for (const key in user) {
    console.log(user[key]);
}
const arr = ['b', 'a', 'c'];

for (const key in arr) {
    console.log(arr[key]);
}
console.dir(arr);
Array.prototype.someMethod = function () {
};


const str = 'string';

for (const key in str) {
    console.log(str[key]);
}
//!!!! for in перебирает свойства не по порядку!!!!!

// for of проходится по значениям перебираемого обьекта
const arr2 = ['b', 'a', 'c'];

for (const key of arr2) {
    console.log(key);
}
// for in получает ключ,  а for of  значения!!!

const salaries = {
    john: 500,
    ivan: 1000,
    anna: 5000,
    sayHello: () => {
        console.log('Hello');
    }
}
salaries[Symbol.iterator] = function () {
    return {
        current: this.john,
        last: this.anna,
        next() {
            if (this.current < this.last) {
                this.current = this.current + 500;
                return {done: false, value: this.current}
            } else {
                return {done: true, value: this.current}

            }

        }
    }
}

// for (let res of salaries) {
//     console.log(res);
// }

//можно вызвать и вручную:
const iterator = salaries[Symbol.iterator]();
console.log(iterator.next()); //может понадобиться когда вызываем команду внутри обычного цикла, ведь мы можем останавливать циклы
// при помощи break; или прерывать continue;
// });