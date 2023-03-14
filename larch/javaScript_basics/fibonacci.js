/*

Реализуйте функцию fib() и экспортируйте её по умолчанию. Функция вычисляет положительные числа fibonacci.
Аргументом является порядковый номер числа, нумерация чисел в последовательности начинается с нуля.

Формула:

f(0) = 0
f(1) = 1
f(n) = f(n-1) + f(n-2)

fib(3);  // 2
fib(5);  // 5
fib(10); // 55

*/

// first solution

// const fib = (num) => {
//   if (num === 0) {
//     return 0;
//   }
//
//   if (num === 1) {
//     return 1;
//   }
//
//   return fib(num - 1) + fib(num - 2);
// };

// second solution

const fib = (num) => {
  if (num === 0) {
    return 0;
  }

  if (num === 1) {
    return 1;
  }

  let first = 0;
  let second = 1;
  let result = first + second;

  for (let i = 2; i <= num; i += 1) {
    result = first + second;
    first = second;
    second = result;
  }

  return result;
};

console.log(fib(10));
