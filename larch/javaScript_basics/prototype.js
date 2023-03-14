const newArr = [1, 2, 3];

Array.prototype.copy = function () {
  let result = [];
  for (let i = 0; i < 2; i++) {
    this.forEach((el) => {
      result.push(el);
    });
  }
  return result;
};

console.log(newArr.copy());
console.log(newArr);
