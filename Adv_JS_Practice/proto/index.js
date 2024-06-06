const person = {
  alive: true,
};

const musician = {
  plays: true,
};
const animal = {
  alive: true,
};

musician._proto_ = person;
console.log(musician.plays);
console.log(musician);

// const car = {
//   doors: 2,
//   seats: 4,
//   get seatNum() {
//     return this.seats;
//   },
//   set seatNum(no) {
//     this.seat = no;
//   },
// };

// const car2 = {};
// Object.setPrototypeOf(car2, car);
// car2.seatNum = 3;
// console.log(car2);
function Animal(species) {
  this.species = species;
  this.eats = true;
}

Animal.prototype.walks = function () {
  return `${this.species} is walking`;
};
const cat = new Animal("cat");
console.log(cat.species);
console.log(cat.walk());
