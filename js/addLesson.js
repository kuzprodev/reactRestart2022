// 12 разница между объектами и массивами и неочевидные синтаксические возможности
const arr =['a', 'b', 'c'];
const arrObj = {
    a:'a',
    1: 'b',
    2: 'c'
};

// arrObj.b = '1234';
arrObj['b'] = '1234';


console.log(arrObj['b']);
console.log(arrObj.b);
// console.log(arr[1]);
// console.log(arrObj.a);
console.log(arrObj[1]);

// const obj = {a:1, b:2};
const obj = {
    Anna: 500,
    'Alise': 800 //свойство всегда строка
};
