const arr = [1, 'asdf', `test`, 15, {}, 'asdf', 15, {}];

const unique = [...new Set(arr)];

const duplicate = () => {
  return arr.filter((el, i) => arr.indexOf(el) !== i);
};

console.log(unique);
console.log(duplicate());
