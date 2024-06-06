let x = 1;

function a() {
  let myValue = 2;
  console.log(myValue);
  console.log(x);

  function a2() {
    console.log(myValue);
    console.log(x);
  }
  return a2;
}

const result = a();
console.log(result);
//result();

//IIFE
const privateCounter = (() => {
  let count = 0;
  console.log(`initial value: ${count}`);
})();
privateCounter();
privateCounter();
privateCounter();
