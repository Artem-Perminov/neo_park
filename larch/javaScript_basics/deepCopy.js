const obj = {
  a: `b`,
  b: {
    a: [1, 2, 3],
    c: {
      name: 'Artem',
    },
  },
};

// const newObj = JSON.parse(JSON.stringify(obj));
const newObj = structuredClone(obj);

newObj.a = '1';
console.log(newObj);
console.log(obj);
