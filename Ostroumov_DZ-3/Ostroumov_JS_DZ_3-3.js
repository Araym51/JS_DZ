'use strict';
/*3. Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку 
15%, можете использовать метод forEach https://mzl.la/1AOMMWX : */
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
 ]

 let blckFriday = products;

 for (let i = 0; i < products.length; i++){
    blckFriday[i].price = products[i].price - products[i].price * 15 / 100;
 }
 console.log(blckFriday);
 