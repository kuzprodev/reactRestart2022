// lesson 46. Навигация по DOM - элементам, data-атрибуты, преимущество for/of
'use strict';
// console.log(document.head);
// console.log(document.documentElement); //получение html тега

// дом элементы и дом узлы эторазное- всё что в тегах это элементы, а то что не видите
// будет узлом(переносы строк, текстовые элементы
// console.log(document.body.firstChild); console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);

console.log(document.querySelector('#current').parentNode);
console.log(document.querySelector('#current').parentNode.parentNode);
console.log(document.querySelector('[data-current="3"]').nextSibling);
console.log(document.querySelector('[data-current="3"]').previousSibling);
//это ысе о узлах, а теперь по элементам

console.log(document.querySelector('[data-current="3"]').nextElementSibling);
console.log(document.querySelector('[data-current="3"]').previousElementSibling);
console.log(document.querySelector('#current').parentElement);


// console.log(document.body.childNodes); //не можем использовать forEach

for(let node of document.body.childNodes){
    if(node.nodeName === '#text'){
        continue;
    }

    console.log(node);
}
