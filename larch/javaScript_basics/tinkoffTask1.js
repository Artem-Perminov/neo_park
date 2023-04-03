/*
Написать функцию/метод, возвращающие true, если поданный на вход массив int содержит 3 и более последовательных числа в любом месте

Примеры:

func([2, 4, 5, 6, 2]) → True
func([0, 22, 23, 24, 29]) → True
func([1, 2, 3, 4]) → True
func([1, 2, 4]) → False

*/

const numbers = [1, 2, 4, 7, 6, 8, 9, 11, 12, 13];

const isThreeInARow = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] + 1 === arr[i + 1] && arr[i + 1] + 1 === arr[i + 2]) {
      return true;
    }
  }

  return false;
};

console.log(isThreeInARow(numbers));
