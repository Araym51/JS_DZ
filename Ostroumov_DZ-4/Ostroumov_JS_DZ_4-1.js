"use strict";
/*
1. (это задание делайте по желанию) Написать функцию, преобразующую число в объект. Передавая на 
вход число в диапазоне [0, 999],
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
- единицы (в свойстве units)
- десятки (в свойстве tens)
- сотни (в свойстве hundereds)
Например, для числа 45 мы должны получить следующий объект:
{
 units: 5, //это единицы
 tens: 4, //это десятки
 hundreds: 0, //это сотни
}
Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/

let result = {
    units: null,
    tens: null,
    hundreds: null
}

function toObject(param){
    if(param > 0 && param < 999){
    result.hundreds = Math.floor(param / 100);
    param = param % 100;
    result.tens = Math.floor(param / 10);
    result.units = param % 10;
    } else {
        console.log("число вне диапазона");
        return 0;
    }
}

toObject(951);
console.log(result);