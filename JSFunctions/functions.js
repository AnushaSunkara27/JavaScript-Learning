function greet() {
    console.log("hello");
}

greet();


// In JavaScript functions can also be defined as expressions

let x = function (num) { return num * num };
console.log(x(4));