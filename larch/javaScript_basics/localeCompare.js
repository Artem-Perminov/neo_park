const users = [
  { name: 'Jen', age: '15', id: 10 },
  { name: 'artem', age: '33', id: 7 },
  { name: 'Dima', age: '37', id: 125 },
];

// const result = users.sort((a, b) => a.id - b.id);
const result = users.sort((a, b) => a.name.localeCompare(b.name));

console.log(result);
