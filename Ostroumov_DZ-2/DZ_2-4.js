/*
4. Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя 
параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их 
и возвращать результат.
Обязательно использовать оператор return
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

a = addition(2, 3); // 5
b = subtraction(5, 2); // 3
c = multiplication(4, 7);  // 28 
d = division(10, 2); // 5

// alert(`${a}, ${b}, ${c}, ${d}`)