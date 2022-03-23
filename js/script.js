"use strict";
// lesson 17методы и свойства строк и чисел
const str="test";
const arr=[1,2,5];
console.log(str.length);
console.log(arr.length);
// методы это вспомогательные свойства и они вызываются метод() а свойства нет .length
console.dir(Number); //выводит какой-то элемент ввиде обьекта
console.log(str[2]);
console.log(str.toUpperCase());//возвращает новое значение, не изменяет предыдущую запись


const fruit="Some fruit";//поиск подстроки тоесть узнать с какого индекса(какой символ по счету начало) начинается
console.log(fruit.indexOf("fruit"));//зачастую используется чтобы узнать есть ли в строке искомое значение
console.log(fruit.indexOf("q"));//получим -1 значит что отсутствует

const logg="Hello world";
console.log(logg.slice(6,logg.length));// =console.log(logg.slice(6))
console.log(logg.slice(6));//поддерживается отрицательное начало -5 справа налево строки


console.log(logg.substring(6,11));//можно задавать первый аргумент больше чем второй и не поддерживает отрицательные значения =такойже как и метод slice


console.log(logg.substr(6,5)); //вторым значением указываем сколько символов хотим вырезать после тго как начали


//числа
const num = 12.2;
console.log(Math.round(num));//округление к ближ целому
const test ="12.2px";
console.log(parseInt(test));//перевести в число, а вообще этот метод переводит в другую систему исчислений
console.log(parseFloat(test));// взять строку или число и вернуть в десятичном варианте возвращает с плавающей точкойй