/*
1. Implicit type conversion
2. Explicit type conversion
*/

// Implicit
// When a number is added to a string, JavaScript converts the number to a string before concatenation.
let result;

result = '3' + 2;
console.log(result);  // "32"

result = '3' + true;
console.log(result) // "3true"


// numeric string used with - , / , * results number type

result = '4' - '2'; 
console.log(result); // 2

result = '4' - 2;
console.log(result); // 2

result = '4' * 2;
console.log(result); // 8

result = '4' / 2;
console.log(result); // 2



// Explicit conversion
// To convert numeric strings and boolean values to numbers, you can use Number()

// string to number
result = Number('324');
console.log(result); // 324

result = Number('324e-1')  
console.log(result); // 32.4

// You can also generate numbers from strings using parseInt(), parseFloat(), unary operator + and Math.floor(). For example,

result = parseInt('20.01');
console.log(result); // 20

result = parseFloat('20.01');
console.log(result); // 20.01

result = +'20.01';
console.log(result); // 20.01

result = Math.floor('20.01');
console.log(result); // 20

// To convert other data types to strings, you can use either String() or toString().

//number to string
result = String(324);
console.log(result);  // "324"

result = String(2 + 4);
console.log(result); // "6"

//other data types to string
result = String(null);
console.log(result); // "null"

result = String(undefined);
console.log(result); // "undefined"

result = String(NaN);
console.log(result); // "NaN"

result = String(true);
console.log(result); // "true"

result = String(false);
console.log(result); // "false"

// using toString()
result = (324).toString();
console.log(result); // "324"

result = true.toString();
console.log(result); // "true"

// To convert other datatypes to boolean, you can use Boolean()
result = Boolean('');
console.log(result); // false

result = Boolean(0);
console.log(result); // false
