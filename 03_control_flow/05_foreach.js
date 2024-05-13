const programming = ["js", "rb", "py", "java"];

// programming.forEach((element) => {
//   console.log(element);
// });
// programming.forEach((element, index, arr) => {
//   console.log(element, index, arr);
// });

const myCoding = [
  {
    langName: "javascript",
    langext: "js",
  },
  {
    langName: "python",
    langext: "py",
  },
  {
    langName: "ruby",
    langext: "rb",
  },
  {
    langName: "c++",
    langext: "cpp",
  },
];

myCoding.forEach((item) => {
  console.log(item.langName, item.langext);
});
