/*
Реализуйте и экспортируйте по умолчанию функцию, которая переворачивает цифры в переданном числе и возвращает новое число.

Примеры:

reverseInt(13); // 31
reverseInt(-123); // -321
reverseInt(8900); // 98

Подсказки
Длина строки str находится так: str.length
Вам может пригодиться функция Math.abs()
*/

const reverseInt = (num) => {
  if (num < 0) {
    const symbol = '-';
    const reversedNum = String(num).split('-')[1].split('').reverse().join('');
    return Number(`${symbol}${reversedNum}`);
  }

  return Number(String(num).split('').reverse().join(''));
};

console.log(reverseInt(-321));
