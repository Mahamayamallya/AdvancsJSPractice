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
