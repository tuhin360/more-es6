const people = [
    { name: 'Meena', age: 20},
    { name: 'Rina', age:15},
    { name: 'Suchorita', age: 22}
];

// for(let i = 0; i < people.length; i++){
//     sum = 0;
//      add = people.age[i] + sum;
// }
// console.log(add)

const add = people.reduce((previous, current = people.[age].[i]) => previous + current, 0);
console.log(add);