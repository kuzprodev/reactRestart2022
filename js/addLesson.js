// 23 цикл в цикле и метки
for (let i = 0; i < 3; i++) {
    console.log("первый цикл-обертка");
    for (let j = 0; j < 3; j++) {
        console.log("первый вложенный цикл");
    }
};


// *
// **
// ***
// ****
// *****
// ******

let result = '';
const length = 7;
for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
        result += '*';
    }
    result += '\n'; // \n -перенос строки в коде
}

console.log(result);




first: for (let i = 0; i < 5; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 5; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if(k === 2){
                // break first;
                continue first; // first это метка к которой переходит цикл к выполнению после условия
            }
            console.log(`Third level: ${k}`);
        }
    }
};