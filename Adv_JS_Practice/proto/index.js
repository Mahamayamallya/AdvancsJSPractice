/*const musician = {
  plays: true,
};
const person = {
  alive: true,
};

Object.setPrototypeOf(musician, person);
console.log(Object.getPrototypeOf(musician));
console.log(musician.alive);
console.log(musician.__proto__ === Object.getPrototypeOf(musician));


musician.__proto__ = person;
console.log(musician.plays);
console.log(musician.alive); 
console.log(musician);


//Prototype chain
const guitarist = {
  strings: 6,
  __proto__: musician,
};


console.log(guitarist.alive);
console.log(guitarist.plays);
console.log(guitarist.strings);
console.log(guitarist); 
------------------------------------------------

const car = {
  doors: 2,
  seats: "leather",

  get SeatMaterial() {
    return this.seats();
  },

  set seatMaterial(material) {
    this.seats = material;
  },
};

const luxuryCar = {};
console.log(luxuryCar);
Object.setPrototypeOf(luxuryCar, car);
console.log(luxuryCar);
luxuryCar.seatMaterial = "vinyl";
luxuryCar.doors = 4;
console.log(car.seats);
console.log(luxuryCar.seats);

//walking up the chain
console.log(luxuryCar.valueOf());

//loop
Object.keys(luxuryCar).forEach((key) => {
  console.log(key); //seats, doors - the value which has been set, not the default value from car.
});

for (let key in luxuryCar) {
  console.log(key); //includes inherited properties
}
----------------------------------------------------------

//Object constructors

function Animal(species) {
  this.species = species;
  this.eats = true;
}

Animal.prototype.walks = function () {
  return `A ${this.species} is walking.`;
};

const Bear = new Animal("bear");
console.log(Bear.species);
console.log(Bear.walks());

console.log(Bear.__proto__);
console.log(Animal.prototype);
console.log(Bear.__proto__ === Animal.prototype);
console.log(Bear);

------------------------------------------------------------
*/
//Inheritance
class Vehicle {
  constructor() {
    (this.wheels = 1), (this.motorized = true);
  }

  ready() {
    return "Ready to go!";
  }
}

class Motorcycle extends Vehicle {
  constructor() {
    super();
    this.wheels = 2;
  }

  wheelie() {
    return "On one wheel now!";
  }
}

const myBike = new Motorcycle();
console.log(myBike);
console.log(myBike.wheelie());
console.log(myBike.wheels);
console.log(myBike.ready());
