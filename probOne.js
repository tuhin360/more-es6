const numbers = [1, 3, 5, 7, 9];

// using array.map()
const even = numbers.map(n => n+1);
console.log(even);

// using for loop
for(let i = 0; i < numbers.length; i++){
    numbers[i] = numbers[i]+1;
}
console.log(numbers);