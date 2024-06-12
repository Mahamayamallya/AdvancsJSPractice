const initApp = async () => {
  const memorizedAdd3 = memorize(add3);
  console.log(memorizedAdd3(10, 20, 2));
  console.log(memorizedAdd3(10, 10, 10));
  console.log(memorizedAdd3(20, 10, 3));
  console.log(memorizedAdd3(10, 10, 10));
};

document.addEventListener("DOMContentLoaded", initApp);

const multiplyBy10 = (num) => {
  return num * 10;
};

const add3 = (a, b, c) => {
  return a + b + c;
};

const addMany = (...args) => {
  return args.reduce((acc, num) => acc + num);
};

//memorize decorate function
const memorize = (fn) => {
  const cache = {};

  return (...args) => {
    if (args.toString() in cache) {
      //key is stored as string
      console.log(cache);
      return cache[args.toString()];
    }
    const result = fn(...args);
    cache[args.toString()] = result;
    return result;
  };
};
