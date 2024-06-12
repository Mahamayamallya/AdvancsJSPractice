//IIFE

const x = 10;
const hello = () => "Hello world";

//1. Does not pollute the global object namespace
(() => {
  console.log("----");
  const x = 5;
  const hello = () => "hello life";
  console.log(x);
  console.log(hello());
  console.log("----");
})();

console.log(x);
console.log(hello());

//2. Private var and methods from closure

const increment = (() => {
  console.log("one");
  let count = 0;
  console.log(count);
  const credits = (num) => console.log(`I have ${num} credit(s)`);
  console.log("two");
  return () => {
    console.log("three");
    count++;
    credits(count);
  };
})();
console.log("main");
increment();
increment();
//credits(3);

//3. The module pattern
const Score = (() => {
  let count = 0;

  return {
    current: () => {
      return count;
    },
    increase: () => {
      count++;
    },
    reset: () => {
      count = 0;
    },
  };
})();

console.log(Score.current());
Score.increase();
console.log(Score.current());
Score.increase();
console.log(Score.current());
Score.reset();
console.log(Score.current());
console.log("-----------------");
//Revealing pattern is a variation of the module pattern
const Game = (() => {
  let count = 0;
  const current = () => {
    return count;
  };
  const increase = () => {
    count++;
  };
  const reset = () => {
    count = 0;
  };

  return {
    current: current,
    increase: increase,
    reset: reset,
  };
})();
console.log(Game.current());
Game.increase();
console.log(Game.current());

//Injecting a namespace object
((namespace) => {
  namespace.count = 0;
  namespace.current = function () {
    return `App count is ${this.count}`;
  };
  namespace.increase = function () {
    this.count++;
  };
  namespace.reset = function () {
    this.count = 0;
  };
})((window.App = window.App || {}));

App.increase();
console.log(App.current());
