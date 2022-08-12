//lesson 54. (д) Оператор опциональной цепочки (?.) ES11

'use strict';
// document.addEventListener('DOMContentLoaded', () => {

const box = document.querySelector('.box');
const block = document.querySelector('.block');
console.log(block);
if (block) {
    console.log(block.textContent);
}
console.log(block?.textContent);
// block?.textContent = "123";  //будет undefanet
// block?.textContent = "123";
console.log(1 + 2);

const userData = {
    name: 'Ivan',
    age: null,
    say: ()=>{
        console.log('Hello!');
    }
};
userData.say();
userData.hey?.();

if(userData && userData.skills && userData.skills.js){

console.log(userData.skills.js);
}
console.log(userData?.skills?.js);


// });