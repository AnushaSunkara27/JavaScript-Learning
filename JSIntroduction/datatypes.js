// strings
const name = "Anusha";
console.log(`the name is ${name}`);

//number - represents integer and floating point numbers

const number1 = 3/0;
console.log(number1); //Infinity

const number2 = -3/0;
console.log(number2); //-Infinity

const number3 = "abc"/3;
console.log(number3); //NaN

//BigInt - Number type can only represent numbers less than 2^53-1 and more than -(2^53-1)
// However If you want to use a large number than that you need to use Bigint

const value = 900719925124740998n;

const result1 = value + 1n;
console.log(result1); // 900719925124740999n

const result2 = value + 1;
console.log(result2); // Error cannot add BigInt and number


// boolean data types

const dataChecked = true;
const valueCounted = false;

// undefined - If a variable is declared but the value is not assigned 
let name1;
console.log(name1);

// null - It is a special value that represents empty or unknown value

const number = null;

// symbol - symbol is a immutable primitive value that is unique.

const value1 = symbol('hello');
const value2 = symbol('hello');
// Though value1 and value2 both contain 'hello', they are different as they are of symbol type

// object - allows us to store collections of data

const student = {
    firstName: 'ram',
    lastName: null,
    class: 10
}

// type - JS is a dynamically typed language means variable can be of one data type and later it
// can be changed to another data type

let data = 5;
data = 'hello';

// typeof - to find datatype of variable
const a = 5;
typeof(a) // returns "number"


