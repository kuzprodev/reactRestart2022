'use strict';
//callback function функция которая должна выполниться после того как другая завершила своё выполнение
function first() {
    //Do something
    setTimeout(function () {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}
first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок!');
}
learnJS('JavaScript', done);
// learnJS('JavaScript', function(){
//     console.log('Я выполнил урок');
// });


const num = 50;
switch (num) {
    case 49:
        console.log("Не верно");
        break;
    case 40:
        console.log('No');
        break;
    case 50:
        console.log('wow-yes');
        break;
    default:
        console.log("Не в этот раз");
        break;
}

const str = '50';
switch (str) {
    case '49':
        console.log("Не верно");
        break;
    case '40':
        console.log('No');
        break;
    case '50':
        console.log('wow-yes');
        break;
    default:
        console.log("Не в этот раз");
        break;
}
//lesson 13+