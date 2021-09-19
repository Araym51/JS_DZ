/*
3. Объявить две переменные a и b и задать им целочисленные произвольные начальные 
значения.
Затем написать скрипт, который работает по следующему принципу:
- если a и b положительные, вывести их разность (ноль можно считать положительным числом);
- если а и b отрицательные, вывести их произведение;
- * (этот пункт по сложнее, делайте по желанию) если а и b разных знаков, вывести их сумму;
*/

"use strict";
/**
 * 
 * @param {*} num1 первое число для сравнения
 * @param {*} num2 второе число для сравнения
 * @returns - если a и b положительные, выводит их разность (ноль можно считать положительным числом);
            - если а и b отрицательные, выводит их произведение;
            - если а и b разных знаков, выводит их сумму.
 */
function evaluator(num1, num2){
    let result = undefined
    if (num1 >= 0 && num2 >= 0) {
        result = num1 - num2;
    } else if (num1 < 0 && num2 < 0) {
        result = num1 * num2;
    } else if ((num1 < 0 && num2 > 0) || (num1 > 0 && num2 < 0)){
        result = num1 + num2;
    }
    return result;
}

let a = evaluator(0, 5); // -5
let b = evaluator(4, 5); // -1
let c = evaluator(-6, 10); // 4
let d = evaluator(-7, -10); // 70 

alert(`${a}; ${b}; ${c}; ${d}`);