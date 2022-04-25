// 21 логические операторы
// const hamburger = true;// 5
// const fries = true;//null, 0
// if(hamburger && fries){
//     console.log("Я сыт!");
// }
// console.log((hamburger && fries));
//результат логических операций это всегда какоето булевое значение true или false



// const hamburger = 3; 
// const fries = 1;
// const cola =0;
console.log((hamburger === 3 && cola && fries)); //оператор && возвращает первое значение на котором он остановился, а если все правильно то возвратит тот на котором остановился

if(hamburger === 3 && cola === 1 && fries === 1){
    console.log("Все довольны!");
}
else{
    console.log("Мы уходим!");

}

console.log(1 && 0);
console.log(1 && 5);
console.log(null && 5);
console.log(0 && 'efefefesgwrf');



const hamburger = 3; 
const fries = 3;
const cola = 0;
const nuggets = 2;

if(hamburger === 3 && cola === 2 || fries === 3 && nuggets){
    console.log("Все сыты!");
}
else{
    console.log("Мы уходим!");

};

let johnReport, alexReport, samReport, mariaReport = 'done';
console.log(johnReport || alexReport || samReport || mariaReport);