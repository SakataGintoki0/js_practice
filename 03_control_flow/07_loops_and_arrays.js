const myNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const result = myNums.map((el) => el + 10);

const result = myNums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num > 30);

// console.log(result);

const smallNums = [0, 1, 2];
const initialNum = 1;
const reduceResult = smallNums.reduce((acc, cur) => {
  return acc + cur;
}, initialNum);

console.log(reduceResult);
