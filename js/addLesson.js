// 24 аргументы функции

// const usdCurr = 28;
// const eurCurr = 32;

//  function convert(amount, curr){
//     console.log(curr * amount);
// }
// convert(500, usdCurr)
// convert(500, eurCurr)

//27 про важность return

const usdCurr = 28;
const discount = 0.9;

 function convert(amount, curr){
    return curr * amount;
}
function promotion(result){
console.log(result * discount);
}


const res =convert(500, usdCurr);
promotion(convert(500, usdCurr));


function test (){
    for(let i = 0; i < 5; i++){
        console.log(i);
        if(i === 3) return
    }
    console.log('Done');
}
test();

function doNothing(){};
console.log(doNothing() === undefined);