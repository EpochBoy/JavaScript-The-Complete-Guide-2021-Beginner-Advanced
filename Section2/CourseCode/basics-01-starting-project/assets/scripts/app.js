const defaultResult = 0;
let currentResult = defaultResult;

currentResult = (currentResult + 20) * 2;

let calculationDescription = '(' + currentResult + ' + 20)*2';

// template literal
let calculationDescription2 = `${defaultResult}`;
console.log(calculationDescription2);

outputResult(currentResult, calculationDescription);
