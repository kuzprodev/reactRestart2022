 //lesson 60. (*) Set
 // это особый вид коллекций где каждое значение может повторяться только один раз- массив где каждое значение встречается только однажды
 'use strict';
 // document.addEventListener('DOMContentLoaded', () => {
 // const arr = [1, 1, 1, 2, 2, 4, 5, 6, 5];const set =  new Set(arr);

 const arr = ['Alex', 'Nina', 'Stepan', 'Petro', 'Ann', 'Alex'];

// функция помощник, которая фильтрует любой массив
function unique(arr){
    return Array.from(new Set(arr)); //возвращаем, создаем массив из чего-то, происходит быстрая фильтрация
}
console.log(unique(arr));


//  const set = new Set(arr);

//  //  методы Set:
//  set.add('Ivan')
//      .add('Sergo')
//      .add('Nina');
//  // set.delete(value);
//  // set.has(value);
//  // set.clear();
//  // set.size;


//  // for(let value of set){
//  //     console.log(value);
//  // }
//  set.forEach((value, valueAgaing, set) => {
//      console.log(value, valueAgaing); // значение и значение опять 
//  })


//  console.log(set); //значения без повторений! только уникальные значения. особенность Set -набора данных


//  console.log(set.values());
//  set.keys(); //существует для обратной совместимости с map
//  set.entries(); //существует для обратной совместимости с map



 // });