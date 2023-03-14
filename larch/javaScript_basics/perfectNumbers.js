/*
Создайте функцию isPerfect(), которая принимает число и возвращает true, если оно совершенное, и false — в ином случае.

Совершенное число — положительное целое число, равное сумме его положительных делителей (не считая само число).
Например, 6 — идеальное число, потому что 6 = 1 + 2 + 3.

isPerfect(6); // true
isPerfect(7); // false
*/

const isPerfect = (num) => {
  if (num < 6) {
    return false;
  }

  let sum = 0;
  const upperBorder = num / 2;

  for (let divisor = 1; divisor <= upperBorder; divisor += 1) {
    if (num % divisor === 0) {
      sum += divisor;
    }
  }

  return sum === num;
};

console.log(isPerfect(7));
