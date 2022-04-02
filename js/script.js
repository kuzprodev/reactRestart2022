"use strict"
// lesson26 Динамическая типизация в JS 
// 1)
console.log(typeof (String(null)));
console.log(typeof (String(4)));
console.log(String(null));


// 2)
console.log(typeof (5 + '')); //конкатенация это сложение строки с чем-то, при сложении со строкой всегда получается строка


const num = 5;
console.log("https://maybe.com/catalog" + num);


const fontsize = 26 + 'px';
// To number
// 1) 
console.log(typeof (Number('4')));
// 2)
console.log(typeof (+'34'));

// 3)
console.log(typeof (parseInt("15px", 10)));

let answ = +prompt("Hello", '');

// Всё что мы получаем от пользователя приходит строкой


// To boolean

// 0, '', null, undefined, NaN;      -//всегда false, а всё остальное true
// 1)способ логичечких преобразований
let swither = null;
if (swither) {
    console.log("Working...");
}
swither = 1;
if (swither) {
    console.log("Working...");
}


// 2)способ логических преобразований
console.log(typeof (Boolean('4')));


// 3)способ логических преобразований
console.log(typeof (!!"4444"));