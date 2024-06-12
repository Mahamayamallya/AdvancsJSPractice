const prepare = () => {
  return {
    prepare: () => console.log("preparing.."),
  };
};

const bake = () => {
  return {
    bake: () => console.log("baking..."),
  };
};

const toss = () => {
  return {
    toss: () => console.log("toasting..."),
  };
};

const ready = () => {
  return {
    ready: () => console.log("ready!"),
  };
};
const butter = () => {
  return {
    butter: () => console.log("buttering..."),
  };
};

const createPizza = (size, crust, sauce) => {
  const pizza = {
    size: size,
    curst: crust,
    sauce: sauce,
    toppings: [],
  };
  return {
    ...pizza,
    ...prepare(),
    ...bake(),
    ...ready(),
  };
};

const createTossedButteredCrustPizza = (pizza) => {
  return {
    ...pizza,
    ...toss(),
    ...butter(),
  };
};

const addToppings = (pizza, topping) => {
  pizza.toppings.push(topping);
  return pizza;
};

const p = createPizza("medium", "thin", "original");
console.log(p.bake());
console.log(p);

const p2 = createTossedButteredCrustPizza(
  createPizza(("medium", "thin", "original"))
);
console.log("......");
console.log(p2);
p2.toss();
p2.ready();

const onePizza = createPizza("medium", "thin", "original");
console.log(onePizza);
console.log(addToppings(onePizza, "mushroom"));
console.log(onePizza); //mutation
