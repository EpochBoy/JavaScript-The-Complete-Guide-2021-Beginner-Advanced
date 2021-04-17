function sayHello(name) {
	console.log('Hi ' + name);
}

sayHello();

const sayHello2 = (greet, name = 'Orangutango') => {
	// console.log('Hi ' + name);
	greet = 'Hello ' + name;
	return console.log(greet);
};

sayHello2('Hi', 'FredTheNinja');
sayHello2('a');

const sayHi1 = (greet, name = 'ikke kammerat') => {
	console.log(greet + ' ' + name);
};
sayHi1('Farvel', 'kammerat');
sayHi1('HEJ');

const sayHi2 = () => {
	hils = 'Dav';
	navn = 'venne';
	console.log(hils, navn);
};
sayHi2();

const sayHi3 = () => {
	return console.log('GODDAV ' + 'FredTheNinja');
};
sayHi3();

const checkInput = (callback, ...strings) => {
	let hasEmptyText = false;
	for (const text of strings) {
		if (!text) {
			hasEmptyText = true;
			break;
		}
	}
	if (!hasEmptyText) {
		callback();
	}
};

checkInput(
	() => {
		console.log('All not empty!');
	},
	'hello',
	'hejsa',
	'hygge'
);
