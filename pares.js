// - Criar um arquivo que dado o array de valores[2, 4, 3, 1, 6, 7, 9],
//   retorne quais são pares.
const array = [2, 4, 3, 1, 6, 7, 9, 13, 18, 36, 20];
const evenNumbers = array.filter(element => element % 2 === 0);
console.log(`Os números pares são: ${evenNumbers.toString()}.`);
