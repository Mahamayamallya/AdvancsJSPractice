//The same input ALWAYS gives same output

const add = (x, y) => x + y;
console.log(add(2, 3));

const fullName = (first, last) => `${first} + ${last}`;
console.log("Mahamaya", "Mallya");

//We can replace the function with the output -called "referential transparency"

//impure function
const z = 1;
const sum = (x, y) => x + y + z;
console.log(sum(2, 3));
/*
1. increment input -primitive data
2. push data into array input - structural data
3.Can not modify DOM, can not access db,API, storage, file system
*/

//Refactored - increment
const x = 2;
const pureIncrement = (num) => num + 1;
console.log(pureIncrement(x));
console.log(x); //2

//Refactored - array
const myArray = [1, 2];
const pureAddArray = (array, data) => [...array, data];
console.log(pureAddArray(myArray, 5));
console.log(myArray);

//Examples of Higher order functions that are pure

const oneToFive = [1, 2, 3, 4, 5];
const oddToFive = oneToFive.filter((elem) => elem % 2 != 0);
console.log(oddToFive);

const doubled = oneToFive.map((elem) => elem * 2);
console.log(doubled);

const summed = oneToFive.reduce((acc, elem) => acc + elem);
console.log(summed);
console.log(oneToFive);
