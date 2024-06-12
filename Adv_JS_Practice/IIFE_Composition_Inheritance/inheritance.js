class Pizza {
  constructor(size, crust, sauce) {
    this.size = size;
    this.crust = crust;
    this.sauce = sauce;
    this.toppings = [];
  }

  prepare() {
    console.log("preparing");
  }
  bake() {
    console.log("baking...");
  }
  ready() {
    console.log("ready...");
  }
}

class cheeseCrustPizza extends Pizza {
  cheese() {
    console.log("cheese....");
  }
}

class stuffedCrustPizza extends Pizza {
  stuff() {
    console.log("stuffing....");
  }
}

const myPizza = new stuffedCrustPizza();
console.log(myPizza);
myPizza.stuff();
