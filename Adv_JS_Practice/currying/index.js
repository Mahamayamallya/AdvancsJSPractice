// // Original function
// function buildSandwich(bread, meat, cheese, veggies) {
//   return (
//     "Here's your sandwich with " +
//     bread +
//     " bread, " +
//     meat +
//     ", " +
//     cheese +
//     ", and " +
//     veggies.join(", ") +
//     "."
//   );
// }

// // Curried version
// function buildSandwichCurried(bread) {
//   return function (meat) {
//     return function (cheese) {
//       return function (veggies) {
//         return (
//           "Here's your sandwich with " +
//           bread +
//           " bread, " +
//           meat +
//           ", " +
//           cheese +
//           ", and " +
//           veggies.join(", ") +
//           "."
//         );
//       };
//     };
//   };
// }

// const sandwichOrder = buildSandwichCurried("Whole Wheat")("Turkey")("Swiss")([
//   "Lettuce",
//   "Tomato",
//   "Onion",
// ]);
// console.log(sandwichOrder);

// // Output: "Here's your sandwich with Whole Wheat bread, Turkey, Swiss, and Lettuce, Tomato, Onion."
// Original function
function add(x, y) {
  return x + y;
}

//normal to curried
function curry(func) {
  return function curried(...args) {
    // Check if all arguments are provided
    if (args.length >= func.length) {
      // execute the original function with the arguments
      return func(...args);
    } else {
      return function (...moreArgs) {
        const combinedArgs = args.concat(moreArgs);
        // Recursively call
        return curried(...combinedArgs);
      };
    }
  };
}

const curriedAdd = curry(add);

console.log(curriedAdd(2)(3)); // Output: 5
console.log(curriedAdd(2, 3)); // Output: 5
console.log(curriedAdd(2)(3, 4)); // Output: 5
console.log(curriedAdd(2, 3)(4)); // Output: 5
