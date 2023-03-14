const myArr = [10, 15, 1, -3, 7, 25, 9, -1];

const mySort = (arr) => {
  arr.forEach((el) => {
    let box;
    for (let i = 0; i < arr.length; i += 1) {
      box = arr[i];
      if (arr[i] > arr[i + 1]) {
        arr[i] = arr[i + 1];
        arr[i + 1] = box;
      }
    }
  });
};

mySort(myArr);
console.log(myArr);
