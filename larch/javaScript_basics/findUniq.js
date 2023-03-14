const findUniq = (arr) => {
  const result = arr.filter((el) => {
    return arr.indexOf(el) === arr.lastIndexOf(el);
  });
  return result[0];
};

console.log(findUniq([0, 0, 0, 0, 0.55]));
