"use strict"
// lesson21 Массивы и псевдомассивы
const arr = [1, 2, 5, 7, 9];
arr.sort(compareNum); //алгоритм sort внутри себя использует алгоритм быстрой сортировки
console.log(arr);

function compareNum(a, b) {
    return a - b;
}


// arr[99]=0;
// console.log(arr.length);
// console.log(arr);
arr.forEach(function (item, index, arr) {
    console.log(`${index}: ${item} внутри массива ${arr}`);

}); //метод перебора массивов
arr.pop(); //удаляет посл элемент из массива
arr.push(10); //добавляет посл элемент из массива
console.log(arr);
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);
}
const str = prompt("", "");
const products = str.split(", "); // вывод массива без ,_
// console.log(products);
products.sort(); // метод сортировки всегда как строки
console.log(products.join("; ")); //метод обьеденения элементов в массиве