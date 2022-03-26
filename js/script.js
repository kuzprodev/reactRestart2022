"use strict"
// lesson20 Объекты, деструктуризация obj
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {
        console.log("Test");
    }
};
options.makeTest();

// деструктуризация объекта:
const {
    border,
    bg
} = options.colors;
console.log(border, bg);

console.log(Object.keys(options).length);
console.log(options.colors.bg);
console.log(options['colors']['border']);

delete options.name; //удалить

for (let key in options) { //перебираем обьект key-просто переменная и этот цикл будет работать столько раз сколько свойств в объекте
    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {

        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
}
// у объекта нет св-ва length но узнать кол-во можно:
// console.log(Object.keys(options).length);
let counter = 0;
for (let key in options) { //перебираем обьект key-просто переменная и этот цикл будет работать столько раз сколько свойств в объекте
    // if (typeof (options[key]) === 'object') {
    //     for (let i in options[key]) {
    //         console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
    counter++;
    //     }
    // } else {

    //     console.log(`Свойство ${key} имеет значение ${options[key]}`);
    //     counter++;
    // }
}
console.log(counter);

// JS это объектно-ориентированный язык и все сущности которые в нём есть сводятся к объектам=прототипно-ориентированный язык