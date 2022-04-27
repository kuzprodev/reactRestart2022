// Место для первой задачи
function sayHello(name) {
    return `Привет, ${name}`;
}

// Место для второй задачи
function returnNeighboringNumbers(num) {
    return [--num, num, ++num]
}

// Место для третьей задачи
function getMathResult(numOne, numTwo) {
    if (typeof (numTwo) !== 'number' || numTwo <= 0) {
        return numOne;
    }

    let str = '';

    for (let i = 1; i <= numTwo; i++) {
        if (i === numTwo) {
            str += `${numOne * i}`;
            // Тут без черточек в конце
        } else {
            str += `${numOne * i}---`;
            // Это тоже самое, что и
            // str = str + numOne * i + "---"
        }
    }

    return str;
}
//упражнение по написанию кода 6: задание на работу с функциями

///упражнение по написанию кода 7:(*) продвинутые задания на использование функций
function calculateVolumeAndArea(length) {
    if (typeof(length) !== 'number' || length < 0 || !Number.isInteger(length)) {
        return "При вычислении произошла ошибка";
    }

    let volume = 0,
        area = 0;
    
    volume = length * length * length;
    // length ** 3 - это тоже самое, что и выше или варианты через цикл.
    // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
    area = 6 * (length * length);

    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

calculateVolumeAndArea(5);

function getCoupeNumber(seatNumber) {
    if (typeof(seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if (seatNumber === 0 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    }

    for (let i = 4; i <= 36; i = i + 4) {
        if (seatNumber <= i) {
            return Math.ceil(i / 4);
        }
    }
    // тут очень много вариантов решения, но выбрал один из элегантных :)
}
