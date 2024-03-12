// - Criar um novo arquivo que implemente a solução para o problema: dado um array de valores
// [9, 4, 5, 10, 2, 90, 8, 6, 33] exiba quais são os maiores que 20.
const array = [9, 4, 5, 10, 2, 90, 8, 6, 33, 20, 8, 10, 4, 7];
const biggerThan20 = array.filter(element => element > 20);
const lowerThan20 = array.filter(element => element <= 20);
console.log(`Os números maiores que 20 são: ${biggerThan20.toString()}.`);
console.log(`Os números menores ou igual 20 são: ${lowerThan20.toString()}.`);
