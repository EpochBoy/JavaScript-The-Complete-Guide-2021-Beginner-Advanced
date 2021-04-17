const startGameBtn = document.getElementById('start-game-btn');

const start = function () {
	console.log('Game is starting...');
};

// const person = {
//   name: 'Max',
//   greet: function greet() {
//     console.log('Hello there!');
//   }
// };

// person.greet();

// console.dir(startGame);

//fucntions are objects, check console
console.log(typeof start);
console.dir(start);
startGameBtn.addEventListener('click', start);
