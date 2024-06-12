const initApp = async () => {
  const multiplyBy10 = memorizeMultiplyBy10(); //memorizeMultiplyBy10 will return the function and then the following gets calculated.
  console.log(multiplyBy10(10));
  console.log(multiplyBy10(10));
  console.log(multiplyBy10(10));
  console.log(multiplyBy10(1));
  console.log(multiplyBy10(5));
  console.log(multiplyBy10(1));
  console.log(multiplyBy10(5));
  console.log(multiplyBy10(3));
  console.log(multiplyBy10(3));
};

document.addEventListener("DOMContentLoaded", initApp);

const multiplyBy10 = (num) => {
  return num * 10;
};

const memorizeMultiplyBy10 = () => {
  const cache = {};

  return (num) => {
    if (num in cache) {
      console.log("----");
      console.log(cache);
      return cache[num];
    }

    const result = num * 10;
    cache[num] = result;
    return result;
  };
};
