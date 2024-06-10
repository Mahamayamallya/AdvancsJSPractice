/*const buildSandwich = (ingreditent1) => {
  console.log("one");
  return (ingreditent2) => {
    console.log("two");
    return (ingreditent3) => {
      console.log("three");
      return `${ingreditent1},${ingreditent2},${ingreditent3} `;
    };
  };
};

const mySandwich = buildSandwich("bacon")("carrot")("tomato");
console.log(mySandwich);
--------------------------------------------------


//Refactored currying function

const buildSandwich = (ingreditent1) => (ingreditent2) => (ingreditent3) =>
  `${ingreditent1},${ingreditent2},${ingreditent3} `;

const mySandwich = buildSandwich("bacon")("carrot")("tomato");
console.log(mySandwich);
------------------------------------------------------


const multiply = (x, y) => {
  return x * y;
};
const multi = (x, y) => x * y;
const curriedMultiply = (x) => (y) => x * y;

console.log(multiply(2, 3));
console.log(multi(3, 4));
console.log(curriedMultiply(4, 5)); //function returned
console.log(curriedMultiply(4)(5));

//partially applied functions
const timesTen = curriedMultiply(10);
console.log(timesTen);
console.log(timesTen(8));

const updateEle = (id) => (content) =>
  (document.querySelector(`#${id}`).textContent = content);

const updateHeader = updateEle("change")("hii");
-----------------------------------------------------

//Function composition - allows calling small fun in specific order

const addCustomer =
  (fn) =>
  (...args) => {
    console.log("saving info");
    return fn(...args);
  };

const processOrder =
  (fn) =>
  (...args) => {
    console.log(`processing order #${args[0]}`);
    return fn(...args);
  };

let completeOrder = (...args) => {
  console.log(`order #${[...args].toString()} completed`);
};

completeOrder = processOrder(completeOrder);
console.log(completeOrder);
completeOrder = addCustomer(completeOrder);
completeOrder("1000");
---------------------------------------------------------
*/

//requires fun with a fixed num of param

const curry = (fn) => {
  console.log(fn.length);
  return (curried = (...args) => {
    console.log(fn.length);
    if (fn.length !== args.length) {
      //args increases every time
      return curried.bind(null, ...args); //bind creates a new function
    }
    return fn(...args);
  });
};

const curriedTotal = (x) => (y) => (z) => x + y + z;
console.log(curriedTotal(10)(20)(30));


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
// function add(x, y) {
//   return x + y;
// }

//normal to curried
// function curry(func) {
//   return function curried(...args) {
//     // Check if all arguments are provided
//     if (args.length >= func.length) {
//       // execute the original function with the arguments
//       return func(...args);
//     } else {
//       return function (...moreArgs) {
//         const combinedArgs = args.concat(moreArgs);
//         // Recursively call
//         return curried(...combinedArgs);
//       };
//     }
//   };
// }

// const curriedAdd = curry(add);

// console.log(curriedAdd(2)(3)); // Output: 5
// console.log(curriedAdd(2, 3)); // Output: 5
// console.log(curriedAdd(2)(3, 4)); // Output: 5
// console.log(curriedAdd(2, 3)(4)); // Output: 5
