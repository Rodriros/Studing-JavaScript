function substituiNumPar(array) {
  if (!array || array.length === 0) {
    return -1;
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0 && array[i] !== 0) {
      array[i] = 0;
    }
  }

  return array;
}

let meuArray = [1, 3, 4, 6, 80, 33, 23, 90];
console.log(`Input: [${meuArray}]`);
let resultado1 = substituiNumPar(meuArray);
console.log(`Output: [${resultado1}]`);

let arrayVazio = [];
console.log(`Input: [${arrayVazio}]`);
let resultado2 = substituiNumPar(arrayVazio);
console.log(`Output: ${resultado2}`);
