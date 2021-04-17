const startGameBtn = document.getElementById('start-game-btn');

//this is a function
function startGame() {
	console.log('game is starting');
}

const person = {
	name: 'FredTheNinja',
	// this is a method, because the 'function' is attached on an object
	greet: function greet() {
		console.log('Nihau');
	},
};
startGame();

startGameBtn.addEventListener('click', startGame);
