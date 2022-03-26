"use strict"
// lesson19 callback func

function first() {
    //Do something
    setTimeout(function () {
        console.log(1);
    }, 500)
}

function second() {
    console.log(2);
}
first();
second();
// callback-функция которая должна будет выполнится после того как другая завершила своё выполнение
function learnJS(lang, callback) {
    console.log(`Я учу:${lang}`);
    callback();
}

function done() {
    console.log("Я прошел этот урок!");
};
learnJS('JavaScript', done);