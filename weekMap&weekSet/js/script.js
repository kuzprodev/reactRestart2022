'use strict';
// let user = {
//     name: 'Ivan'
// };

// let map = new WeakMap();
// map.set(user, 'data');
// user = null;

// console.log(map);

let cache = new WeakMap();

function cacheUser(user) {
    if (!cache.has(user)) {
        cache.set(user, Date.now());
    }
    return cache.get(user);
}

let lena = {
    name: 'Elena'
};
let alex = {
    name: 'Alex'
};
cacheUser(lena);
cacheUser(alex);
lena = null;

console.log(cache.has(lena));
console.log(cache.has(alex));
//  в WeekSet можно добавлять только обьекты, не примитивы!!! поддерживает  delete add has методы в size keys не существует ине является перебираемым и не существует метода get, потому что это динамическая структура и может очищаться сборщиком мусора.

let messages = [{
        text: 'Hello',
        from: 'Josh'
    },
    {
        text: 'World',
        from: 'Alex'
    },
    {
        text: 'Ow',
        from: 'Mary'
    },
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
// readMessages.add(messages[1]);

messages.shift();
console.log(readMessages.has(messages[0]));
// метод shift у массива удаляет первый обьект