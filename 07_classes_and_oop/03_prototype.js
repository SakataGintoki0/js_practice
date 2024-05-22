// let myName = "Yogesh  ";

// console.log(myName.length);

let myHeroes = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidey power is ${this.spiderman}`);
  },
};

Array.prototype.heyYogesh = function () {
  console.log("Hey yogesh");
};

Object.prototype.yogesh = function () {
  console.log("ok lol");
};

// heroPower.yogesh();
// myHeroes.yogesh();

// heroPower.heyYogesh();
// myHeroes.heyYogesh();

let anotherUsername = "Yogesh     ";
String.prototype.trueLength = function () {
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
