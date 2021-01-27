const task3Element = document.getElementById('task-3');

// using console.log instead of alert(), due to annoying popup
function noParams() {
	console.log('text of your choice');
}

function alertName(name) {
	console.log(name);
}

noParams();
alertName('fredtheninja');

task3Element.addEventListener('click', noParams);

function concatFun(string1, string2, string3) {
	concatString = string1 + string2 + string3;
	return concatString;
}

console.log(concatFun('fred', 1, 'ninja'));
