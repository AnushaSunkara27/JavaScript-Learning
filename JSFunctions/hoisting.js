// Hoisting in Javascript is a behavior in which a function or a variable
// can be used before declaration

// using test before declaring
console.log(test); // undefined
var test;

// In hoisting, though it seems that the declaration has moved up in the program, the actual thing 
// that happens is that the function and variable declarations are added to memory during the compile phase.

// In terms of variables and constants, keyword var is hoisted and let and const does not allow hoisting.

// function Hoisting

// program to print the text
greet();

function greet() {
    console.log('Hi, there.');
}