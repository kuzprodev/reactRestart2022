const btn = document.querySelector('.btn');
let timerId2,
    i = 0;

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;
const id = setInterval(frame, 10);

    function frame() {
        if(pos == 300){
            clearInterval(id);
        }else{
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}




btn.addEventListener("click", myAnimation);
// btn.addEventListener("click", function (e) {
//     // const timerId2 = setTimeout(logger, 2000);
//     timerId2 = setInterval(logger, 1000);
// });



// const timerId = setTimeout(function (text) {
//     console.log(text);
// }, 2000, 'Hello');

// // clearInterval(timerId);
// // clearInterval(timerId2);


// // const timerId2 = setTimeout(logger, 2000);

// function logger() {
//     if (i === 3) {
//         clearInterval(timerId2);
//     }
//     console.log('text');
//     i++;
// };
// // когда таймер с интервалом работает, то он не учитывает как долго будет работать функуия внутри него, тоесть будет накладываться друг на друга не обращая внимание на то что предыдущая еще не закончилась!!, значит ннада использовать рекурсивный вызов сеттаймаут
// let id = setTimeout(function log() {
//     console.log('Hello World!');
//     id = setTimeout(log, 500)
// }, 500);


