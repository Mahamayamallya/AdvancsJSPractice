// let x =2;
// let y=x;
// y+=1;
// console.log(x)
// console.log(y)

// const originalObject = {
//   name: "John",
//   age: 30,
//   hobbies: ["reading", "cooking"],
// };

// // Shallow copy
// const shallowCopy = Object.assign({}, originalObject);

// // Deep copy using JSON.parse and JSON.stringify
// const deepCopy = JSON.parse(JSON.stringify(originalObject));

// originalObject.name = "Jane";
// originalObject.hobbies.push("gardening");

// // Output the changes
// console.log("Original Object:", originalObject);
// console.log("Shallow Copy:", shallowCopy);
// console.log("Deep Copy:", deepCopy);

// Pure function
function add(a, b) {
  return a + b;
}

// Impure function
let result = 0;
function impureAdd(a, b) {
  result = a + b;
  return result;
}

console.log(add(2, 3)); // Output: 5
console.log(add(2, 3)); // Output: 5

console.log(impureAdd(2, 3)); // Output: 5
console.log(result); // Output: 5

console.log(impureAdd(2, 3)); // Output: 5
console.log(result); // Output: 10
