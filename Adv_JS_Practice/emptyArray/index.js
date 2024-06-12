// let myArray = [];
// console.log(myArray.length);
// console.log(myArray.length ? true : false);

let arr = undefined; //same for null
// console.log(arr.length); //error
console.log(arr && arr.length ? true : false);

//optional chaining
let ar = [{ id: 1 }];
console.log(ar?.[0]?.id ? true : false);

//optional chaining with null coalescing operator
//returns id if true else "no id property". Note double ??
console.log(ar?.[0]?.id ?? "no id property");
console.log(ar?.[0]?.name ?? "no id property");

//if we need to check if it is an array/
let myArray = "Dave";

//this doesnt work
console.log(myArray && myArray.length ? true : false);

//neither does this
console.log(myArray?.length ? true : false);

//Yay, this WORKS
console.log(Array.isArray(myArray));

let arrr = [{ id: 1 }];
console.log(Array.isArray(arrr));
console.log(Array.isArray(arrr) && arrr?.[0]?.id ? true : false);
