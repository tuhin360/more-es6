const numbers = [10, 13, 23, 48, 59, 35, 42, 89];

const bigNums = numbers.filter(number => number > 20);
// console.log(bigNums);

const tiny = numbers.filter(number => number < 30);
// console.log(tiny);

const even = numbers.filter(e => e % 2 === 0);
// console.log(even);


const products = [
    {id: 1, name: 'Laptop', price: 80000},
    {id: 2, name: 'Mobile', price: 30000},
    {id: 3, name: 'Watch', price: 25000},
    {id: 4, name: 'Tablet', price: 35000}
];

const expensive = products.filter(product => product.price > 30000);
console.log(expensive);