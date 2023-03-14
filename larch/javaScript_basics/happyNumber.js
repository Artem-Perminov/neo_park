/*
Счастливые числа
Назовем счастливыми числами те, которые в результате ряда преобразований вида "сумма квадратов цифр" превратятся в единицу.
Например:

7   => 7^2 = 49,
49  => 4^2 + 9^2 = 16 + 81 = 97,
97  => 9^2 + 7^2 = 81 + 49 = 130,
130 => 1^2 + 3^2 + 0^2 = 10,
10  => 1^2 + 0^2 = 1.
Вывод: исходное число 7 - счастливое.

isHappyNumber.js
Реализуйте и экспортируйте по умолчанию функцию, которая должна вернуть true, если число счастливое, и false, если нет.
Количество итераций процесса поиска необходимо ограничить числом 10.

Подсказки
Воспользуйтесь вспомогательной функцией sumOfSquareDigits(), которая принимает на вход число и возвращает "сумму квадратов цифр" этого числа.
*/
const sumOfSquareDigits = (n) => {
  let sum = 0;
  const arrNumbers = String(n).split('');
  arrNumbers.forEach((num) => {
    sum += Number(num) ** 2;
  });
  return sum;
};

const isHappyNumber = (num) => {
  let digits = num;
  for (let i = 0; i < 11; i += 1) {
    const preResult = sumOfSquareDigits(digits);
    if (preResult === 1) {
      return true;
    } else {
      digits = preResult;
    }
  }
  return false;
};

console.log(isHappyNumber(7));
