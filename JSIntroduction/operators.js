// Assignment operator

const x = 5;

// Arithmetic operators
let a = 5;
let b = 4;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(++a);
console.log(a--);
console.log(a ** b); // exponentiation

// comparision

// equal operator
console.log(2 == 2); // true
console.log(2 == '2'); // true

// not equal operator
console.log(3 != 2); // true
console.log('hello' != 'Hello'); // true

// strict equal operator
console.log(2 === 2); // true
console.log(2 === '2'); // false

// strict not equal operator
console.log(2 !== '2'); // true
console.log(2 !== 2); // false


// logical operators

//logical AND
console.log(true && true);
console.log(true && false);
//logical OR
console.log(true || false);
// logical NOT
console.log(!true)

// bitwise operators - perform operations on binary representations of numbers

// bitwise AND operator example

result = a & b; 
console.log(result); 

// bitwise XOR operator example

result = a ^ b; 
console.log(result); 

// bitwise NOT operator example
result = ~b;
console.log(result); 

// bitwise left shift
result = a << b;

//String operator - In javascript you can use + to concatenate strings

let str1 = 'Java';
let res = str1+'Script';
console.log(res);

