const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
	const result = num1 + num2;
	console.log('The result is ' + result);
}

add(1, 2);
add(5, 5);
// JS precision fun
add(4.13, 10);

currentResult = ((currentResult + 10) * 3) / 2 - 1;

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

outputResult(currentResult, calculationDescription);
