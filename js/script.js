 //lesson 59. (*) Map
// map это специфические структуры данных, так как у них есть свои методы для работы, по типу данных это обьекты
'use strict';
// document.addEventListener('DOMContentLoaded', () => {
// const user = {
//     4: 'Alex',
//     surname: 'Smith',
//     birthday: '20/04/1991',
//     showMyPublicData: function() {
//         console.log(`${this.name} ${this.surname}`);
//     }
// };
// console.log(typeof(Object.keys(user)[0])); //4 string
const shops = [
    {rice: 500},
    {oil: 300},
    {bread: 50}
];


const budget = [5000, 15000, 25000];

const map = new Map([
    [{paper: 400}, 800]
]); // массив с массивами

// console.log(map.set(shops[0], 5000));
shops.forEach((shop, i) => {
    map.set(shop, budget[i]);
});
// map.set(shops[0], 5000);
// map.set(shops[1], 15000);
// map.set(shops[2], 54000);
//===
// map.set(shops[0], 5000)
//    .set(shops[1], 15000)
//    .set(shops[2], 54000);


console.log(map); //внутри вся карта это массив с массивами

// console.log(map.get(shops[0]));  //получить
// console.log(map.has(shops[0])); //проверить обьект существует ли он внутри карты  true/false
// map.delete(key);
// map.clear();
// map.size; //св-во- кол-во элементов на данный момент внутри карты


// map имеет три встроенных метода для перебора map.keys()
// map.keys(); //возвращает итерируемый обьект по ключам 
// map.values();   //возвращает итерируемый обьект по значениям
// map.entries() // возвращает массив с массивами(св-во и его значение)
// map.forEach //четвертый способ как перебрать карту


console.log(map.keys()); //те получить список всех товаров во всех магазинах
for(let shop of map.keys()){
    console.log(shop); 
}

const  goods =[];
for( let shop of map.keys()){ //сначала превратили карту в массив с обьектами, потомобращаемся к каждому отдельному обьекту
    goods.push(Object.keys(shop)[0]);//чтобы вытащить только его сво-во, тоже преобразуем в массив св-в по ключам-именно строки с товаром
}console.log(goods);


for(let price of map.values()){
console.log(price);
}

for(let price of map.entries()){
    console.log(price);
    }
    for(let [shop, price] of map.entries()){ //деструтеризируем массив из двух элементов
        console.log(price, shop);
        }

        map.forEach((value, key, map) => {
            console.log(key, value);
        });

// part 2:
// переводим обьект в формат карты

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1991',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
};
const userMap = new Map(Object.entries(user)); // переводим обьект в карту
console.log(userMap);


const newUserObj = Object.fromEntries(userMap); //переводит карту(массив с массивами) в обьект
console.log(newUserObj);




// отличие карт от обьектов- 1) ключи карт могут быть чем угодно(массивы, обьекты, функции, цифры и тп), а у обьектов только строки
// 2) порядок св-в в картах всегда такой в каком мы их добавляли, у обьектов нет четкого порядка и зависимости когда было добавленно
// 3)при создании пустой карты в ней нечего не будет содержаться никаких наследуемых св-в через прототип, а в пустом обьекте будут
// 4) карты легко перебирать 
// 5) размер карты легко получить через map.size -св-во 

// });
