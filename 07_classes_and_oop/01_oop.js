const user = {
  username: "yogesh",
  loginCount: 9,
  signedIn: true,

  getUserDetails: function () {
    console.table([this.username, this.loginCount, this.signedIn]);
  },
};

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  this.greeting = () => console.log(`welcome ${this.username}`);
  return this;
}

const userOne = new User("Yogesh", 12, true);

console.log(userOne.greeting());

// console.log(user.getUserDetails());
