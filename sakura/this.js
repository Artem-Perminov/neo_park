// function showThis() {
//   console.log(this);
// }
//
// showThis();

const cities = {
  name: `Moscow`,
  age: `2000`,
  getThis() {
    console.log(this);
  },
};

cities.getThis();
