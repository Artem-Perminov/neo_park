const myObj = {
  name: 'Artem',
  age: '33',
  greeting: () => console.log(`Hi, ${myObj.name}!`),
};

console.log(myObj.greeting());
console.log(Object.getOwnPropertyDescriptor(myObj, 'name'));
