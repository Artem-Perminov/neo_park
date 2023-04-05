// Написать функцию, которая проверяет, является ли одно слово анаграммой другого
// На вход подается 2 строки. На выходе true или false

// канонада, анаконда -> true
// каноннада, анакконда -> false
// стол, стул -> false
// стол, лтос -> true
// батон, нотаб -> true
// батон, нораб -> false
// 'rail safety', 'fairy tales' -> true
// 'listen', 'silent' -> true

const myFn = (str1, str2) => [...str1].sort().join('') === [...str2].sort().join('');

console.log(myFn('listen', 'silent'));
