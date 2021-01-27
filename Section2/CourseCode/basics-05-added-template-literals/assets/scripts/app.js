const defaultResult = 0;
let currentResult = defaultResult;

currentResult = ((currentResult + 10) * 3) / 2 - 1;

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;
let errorMessage = 'an error\n' + 'occurred';
console.log(errorMessage);

outputResult(currentResult, calculationDescription);
