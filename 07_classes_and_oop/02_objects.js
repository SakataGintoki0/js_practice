function mul(num) {
  return num * 5;
}

// console.log(mul(5));
// console.log(mul.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};
createUser.prototype.printMe = function () {
  console.log(`Price is ${this.score}`);
};

const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);

console.log(chai.printMe());
chai.increment();
console.log(chai.printMe());
