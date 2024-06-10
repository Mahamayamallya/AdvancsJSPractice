/* const countToTen = (num = 1) => {
  while (num <= 10) {
    console.log(num);
    num++;
  }
};

countToTen();

//recursive

const countToTenRec = (num = 1) => {
  if (num <= 10) {
    console.log(num);
    num++;
    countToTenRec(num);
  } else return;
};

countToTenRec();
-------------------------------------------------------

const fib = (num, array = [0, 1]) => {
  if (array.length >= num) {
    return array;
  }
  const [nextToLast, last] = array.slice(-2);
  console.log(`nextToLast ${nextToLast}`);
  console.log(`last ${last}`);
  return fib(num, [...array, nextToLast + last]);
};

const result = fib(5);
console.log(result);
--------------------------------------------------------

*/



function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Printing n fibonacci sequence
n = 1;

for (let i = 0; i < n; i++) {
  console.log(fibonacci(i));
}

// var output= [];
// function fibGenerator(n){
//     if(n===1){
//         output=[0];
//     } else if (n===2){
//         output=[0,1];
//     }else if (n>2){
//         output =[0,1];
//         for (i=2; i<n; i++){
//           output.push(output[output.length-1]+output[output.length-2]); //0,1,1,2,3
//         }}
//         else {
//         output=0;
//         }

//     return output;
// }
