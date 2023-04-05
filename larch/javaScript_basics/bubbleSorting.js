const myArr = [10, 15, 1, -3, 7, 25, 9, -1];

const mySort = (arr) => {
  const sortedArr = [...arr];
  sortedArr.forEach(() => {
    for (let i = 0; i < sortedArr.length; i += 1) {
      let box = sortedArr[i];
      if (sortedArr[i] > sortedArr[i + 1]) {
        sortedArr[i] = sortedArr[i + 1];
        sortedArr[i + 1] = box;
      }
    }
  });
  return sortedArr;
};

console.log(myArr);
console.log(mySort(myArr));
