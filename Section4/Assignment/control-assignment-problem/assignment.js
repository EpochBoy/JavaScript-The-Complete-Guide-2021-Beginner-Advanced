const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const randomNumber2 = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber > 0.7) {
	console.log(`Number was ${randomNumber}`);
}

ranArray = [1, 422, 1241, 142, 112, 12, 124, 14, 15, 12];

for (let i = 0; i < ranArray.length; i++) {
	console.log(ranArray[i]);
}

console.log('REVERSE UNO');

// reversed for loop
for (let i = ranArray.length - 1; i > -1; i--) {
	console.log(ranArray[i]);
}

console.log('Done');

if (randomNumber > 0.7 && randomNumber2 > 0.7) {
	console.log(`Random1: ${randomNumber} and Random2: ${randomNumber2}`);
} else if (randomNumber < 0.2 || randomNumber2 < 0.2) {
	console.log(`Random1: ${randomNumber} and Random2: ${randomNumber2}`);
}

console.log('For of / Implementation');
// No reverse for 'for of' loop not "possible"
for (const num of ranArray) {
	console.log(num);
}

let counter = 0;
console.log('While implementation');
while (counter < ranArray.length) {
	console.log(ranArray[counter]);
	counter++;
}
