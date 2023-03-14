/*Реализуйте и экспортируйте по умолчанию функцию, которая меняет в строке регистр каждой буквы на противоположный.
Функция должна возвращать полученный результат

Примеры:

invertCase('Hello, World!'); // hELLO, wORLD!
invertCase('I loVe JS');     // i LOvE js
*/

const invertCase = (str) => {
  let result = '';
  for (const el of str) {
    if (el.toUpperCase() === el) {
      result += el.toLowerCase();
    } else {
      result += el.toUpperCase();
    }
  }
  return result;
};

console.log(invertCase('Hello, World'));
