const data = [1, 1, 1, 2, 3, 2, 3, 'a', 'a', 'a', 'a', 'a', 'a', 'a', 3, 3, 5, 6, 7, 7];

const counter = (arr) => {
  const dataObject = {};
  arr.forEach((el) => {
    if (!dataObject[el]) {
      dataObject[el] = 1;
    } else {
      dataObject[el] += 1;
    }
  });
  return Object.entries(dataObject)
    .sort(([, value1], [, value2]) => value1 - value2)
    .at(-1);
};

console.log(counter(data));
