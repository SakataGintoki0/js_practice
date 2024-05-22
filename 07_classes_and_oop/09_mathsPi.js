const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descripter);

const chai = {
  name: "Ginger chai",
  price: 250,
  isAvailable: true,
};

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
Object.defineProperty(chai, "name", {
  //   writable: true,
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (const [key, value] of Object.entries(chai)) {
  console.log(`${key} : ${value}`);
}
