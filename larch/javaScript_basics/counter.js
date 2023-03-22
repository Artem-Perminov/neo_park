const data = [1, 1, 1, 2, 3, 2, 3, 'a', 'a', 'a', 'a', 'a', 'a', 'a', 3, 3, 5, 6, 7, 7];

const myFn = (arr) => {
  const myObj = {};

  for (const el of arr) {
    if (myObj[el] === undefined) {
      myObj[el] = 1;
    } else {
      myObj[el] += 1;
    }
  }

  const el = Object.entries(myObj).sort(([, value1], [, value2]) => value1 - value2);

  console.log(myObj);

  return el.at(-1)[0];
};

console.log(myFn(data));
