const numbers = [12, 34, 42, 28, 54];
const half = numbers.map(n => n / 2);
const third = numbers.map(n => n / 3);
// console.log(half);
// console.log(third);


const friends = ['Bob', 'Alice', 'Casey', 'Root', 'John'];
const firstLetter = friends.map(first => first[0]);
// console.log(firstLetter);

const nameLength = friends.map(friend => friend.length);
// console.log(nameLength);


const products = [
    {id: 1, name: 'Laptop', price: 80000},
    {id: 2, name: 'Mobile', price: 30000},
    {id: 3, name: 'Watch', price: 25000},
    {id: 4, name: 'Tablet', price: 35000}
];

// const items = products.map(product => console.log(product.name));

const items = products.map(product => product.name);
// console.log(items);

const prices = products.map(p => p.price);
// console.log(prices);