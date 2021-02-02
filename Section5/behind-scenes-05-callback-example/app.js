// // Call stack example
// function getName() {
// 	// Set debugger breaking point toon prompt. Check in browser dev. tools
// 	// Stack is now visible in "Call Stack" menu point
// 	// getName/greet/(anonymous)
// 	// Actually it's prompt()/getName()/greet()/anonymous
// 	// prompt doesn't get shown in dev tools
// 	return prompt('Your name:', '');
// }

// function greet() {
// 	const userName = getName();
// 	console.log('Hello' + userName);
// }
// greet();

// Callback example / Event loop

const addListenerBtn = document.getElementById('add-listener-btn');
const clickableBtn = document.getElementById('clickable-btn');
const messageInput = document.getElementById('click-message-input');

function printMessage() {
	const value = messageInput.value;
	console.log(value || 'Clicked me!');
}

function addListener() {
	clickableBtn.addEventListener('click', printMessage);
}

addListenerBtn.addEventListener('click', addListener);
