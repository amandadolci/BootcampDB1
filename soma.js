// - Criar um novo arquivo que retorne a soma dos itens de um array
// [9, 4, 5, 10, 2, 90, 8, 6, 33]
const array = [9, 4, 5, 10, 2, 90, 8, 6, 33];
const sum = array.reduce((previousValue, currentValue) => previousValue + currentValue);
console.log(`A soma da lista é: ${sum}.`);
