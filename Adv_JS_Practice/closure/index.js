/* let x = 1;

const parentFunction = () => {
  let y = 2;
  console.log("log1");
  console.log(x);
  console.log(y);

  const childFunction = () => {
    console.log("child function");
    console.log(x);
    console.log((x += 5));
    console.log((y += 1));
    console.log("end");
  };

  return childFunction();
};

const result = parentFunction;
console.log(result);
// console.log(result);

result();
result();
result();

console.log(x); 
-------------------------------------------------------

*/

/*
//IIFE
const privateCounter = (() => {
  let count = 0;
  console.log(`initial value :' ${count}`);
  return () => {
    count += 1;
    console.log(count);
  };
})();
privateCounter();
privateCounter();
privateCounter();
//second time onwards, only return value is displayed. 

------------------------------------------------------------
*/
const credits = ((num) => {
  let credits = num;

  console.log(`initial value : ${credits}`);
  return () => {
    credits -= 1;
    if (credits > 0) {
      console.log(`playing game : ${credits}`);
    } else {
      console.log("not enough credits");
    }
  };
})(3);

credits();
credits();
credits();
//when the function is not called, initial value is displayed as it is IIFE. When the function is called, only return is displayed
