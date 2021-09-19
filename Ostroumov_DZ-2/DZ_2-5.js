        /*
5. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических 
операций
(использовать функции из задания 4) и вернуть полученное значение.
*/

"use strict";

/**
 * возвращает результат сложения чисел
 * @param {*} num1 первое слагаемое
 * @param {*} num2 второе слагаемое
 * @returns сумма
 */
const addition = (num1, num2) => {
    return num1 + num2;
}

/**
 * возвращает результат вычитания чисел
 * @param {*} num1 уменьшаемое
 * @param {*} num2 вычитаемое
 * @returns разность
 */
const subtraction = (num1, num2) => {
    return num1 - num2;
}

/**
 * возвращает результат умножения чисел
 * @param {*} num1 первое умножаемое
 * @param {*} num2 второе умножаемое
 * @returns произведение
 */
const multiplication = (num1, num2) => {
    return num1 * num2;
}

/**
 * возвращает результат деления чисел
 * @param {*} num1 делимое
 * @param {*} num2 делитель
 * @returns частное
 */
const division = (num1, num2) => {
    return num1 / num2;
}
/**
 * 
 * @param {*} num1 
 * @param {*} num2 
 * @param {*} operator 
 * @returns 
 */
function mathOperation(num1, num2, operator){
    let result = undefined
    switch (operator){
    case "+":
        result = addition(num1, num2);
        break;
    case "-":
        result = subtraction(num1, num2);
        break;
    case "*":
        result = multiplication(num1, num2);
        break;
    case "/":
        result = division(num1, num2);
        break;
    default:
        alert("необходимо использовать один из операторов: +, -, * или /");
        } return result;
}

let res_1 = mathOperation(4, 2, "+"); // 6
let res_2 = mathOperation(4, 2, "-"); // 2
let res_3 = mathOperation(4, 2, "*"); // 8
let res_4 = mathOperation(4, 2, "/"); // 2 

alert(`${res_1}, ${res_2}, ${res_3}, ${res_4}`)
