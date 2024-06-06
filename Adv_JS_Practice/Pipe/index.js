function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

//  composition
function compose(func1, func2) {
  return function (x, y, z) {
    return func1(func2(x, y), z);
  };
}

// Compose add and subtract functions
const composedFunction = compose(subtract, add);

console.log(composedFunction(10, 5, 3)); // Output: 8 (subtract(add(10, 5), 3) = subtract(15, 3) = 12)

//piping
// Functions to use in piping
function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

//NOTE - function pipe(...funcs){} -it collects all the arguments passed to the pipe function into an array named funcs. This allows the pipe function to accept any number of functions and operate on them as an array.

function pipe(...funcs) {
  return function (initialValue) {
    return funcs.reduce((acc, func) => func(acc), initialValue);
  };
}

// Pipe multiply and divide functions
const pipedFunction = pipe(multiply, divide);

console.log(pipedFunction(10, 2)); // Output: 20 (divide(multiply(10, 2)) = divide(20, 2) = 10)
