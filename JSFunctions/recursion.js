// Recursion is a process of calling itself

function recurse() {
    recurse();
}

recurse();


// A recursive function must have a condition to stop calling itself. Otherwise, the function is called indefinitely.

// Once the condition is met, the function stops calling itself. This is called a base condition.

function factorial(x) {

    // if number is 0 - Base condition
    if(x == 0) {
        return 1;
    }
    else {
        return x * factorial(x-1);
    }
}

const num = 3;

if(num > 0) {
    let result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`);
}