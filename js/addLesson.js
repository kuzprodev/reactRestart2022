// lesson40 замыкание и лексическое окружение
'use strict';
let number = 5;
function logNumber(){
    console.log(number);
}

number = 6;

logNumber();
