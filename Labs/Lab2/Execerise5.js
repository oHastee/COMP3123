const numberList = [1, 2, 3, 4];

const sumOfNumbers = numberList.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const productOfNumbers = numberList.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

console.log(sumOfNumbers);
console.log(productOfNumbers);
