"use strict";
/*1.1 (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 
(по аналогии из дополнительных видео -> 3 примеры наследования -> типы на es5 и es6), 
конструктор Product, который принимает параметры name и price, сохраните их как свойства объекта. 
Также объекты типа Product должны иметь метод make25PercentDiscount, который будет уменьшать 
цену в объекте на 25%. Имейте в виду, что метод make25PercentDiscount не должен 
быть внутри функции-конструктора, и также не нужно создавать отдельный объект-прототип 
(как объект transport в уроке).*/

//es 6
class Product_2 {
    constructor (name_2, price_2) {
        this.name_2 = name_2;
        this.price_2 = price_2;
    }
    make25PercentDiscount_2 () {
        this.price_2 = this.price_2 - (this.price_2 * 25 / 100);
    }
}

let gamingConsole = new Product_2('Xbox', 30000);
gamingConsole.make25PercentDiscount_2();
console.log(gamingConsole)