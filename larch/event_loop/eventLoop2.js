console.log(1);

setTimeout(() => console.log(2));

const promise1 = new Promise((resolve) => {
  console.log(3);
  resolve(4);
});

const promise2 = new Promise((resolve) => {
  console.log(5);
  resolve(6);
});

promise1.then(console.log);
promise2.then(console.log);

console.log(7);
