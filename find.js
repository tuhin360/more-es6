// find: j gulo sorto puron korba tader moddhe prothom upadan ta shudu diba

const numbers = [10, 13, 23, 48, 59, 35, 45, 89];

const fives = numbers.find(num => num % 5 === 0);
const fivesFilter = numbers.filter(num => num % 5 === 0);
// console.log(fives);
// console.log(fivesFilter);

const tiny = numbers.find(num => num < 20);
// console.log(tiny);

const products = [
    {id: 1, name: 'Laptop', price: 80000},
    {id: 2, name: 'Mobile', price: 30000},
    {id: 3, name: 'Watch', price: 25000},
    {id: 4, name: 'Tablet', price: 35000}
];

const cheap = products.find(product => product.price < 40000);
console.log(cheap);