// "Block Scope"
// // Playing with block scope.
// ----------------------------------------------------------------

// let myName = 'fredtheninja';

// // wont work because variable has already been declared above
// // let myName = 'fredtheviking';

// // This works with var
// // var myName = 'fredtheviking';
// // var myName = 'fredthehutti';

// function greet() {
// 	var age = 30;
// 	// shadow variable of outside myName, will work since scope is block scope
// 	let myName = 'hello';
// 	console.log(myName, age);
// }

// console.log(myName);
// greet();

// // Won't work since age is not in global scope
// // console.log(myName, age);

// // Block scope doesn't apply to if statements
// // if variables are implemented with var.
// // It's a normal global variable. Changing var hobbies to let hobbies
// // breaks the below code. let/const use {} to define scope.
// if (myName === 'fredtheninja') {
// 	var hobbies = ['Sports', 'Cooking'];
//     console.log(hobbies);
// }
// console.log(hobbies);

// Variable hoisting
// ----------------------------------------------------------------

// with var we get >undefined, let/const throws an error
// JS engine hoists var variables and also for let/constant
// with const/let there is no initialization as there is with var
// where it gets =undefined. Leads to cleaner/better code.
// let/const forces declaration to the top.
// console.log(userName);
// var userName = 'fredtheninja';

// "Strict Mode"
// ----------------------------------------------------------------

// JS engine automatically adds var in front of userName
// don't do this even though JS is forgiving
// We can use strict mode to enforce proper declaration
// When we've added 'use strict' the below code won't work.
// See documentation for further things disabled by strict mode.
// 'use strict';
// userName = 'fredtheninja';
// // var userName = 'test';
// console.log(userName);

// We can do this without strict mode and var
// This won't work with let/const, even without strict mode
// strict mode was introduced in ES5 and isn't a an ES6 feature
// var undefined = 'test';
// console.log(undefined);

// JS Engines
// ----------------------------------------------------------------
// Check slides
