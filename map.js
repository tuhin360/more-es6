const numbers = [2, 4, 5, 6, 7];

function getDoubles(numbers){
    const output = [];
    for(const number of numbers){
        const doubled = number * 2;
        output.push(doubled);
    }
    return output;
}

const result = getDoubles(numbers);
// console.log(result);

const makeDouble = numbers.map(num => num * 2);
// console.log(makeDouble);

const inc = numbers.map(n => n+1);
console.log(inc);