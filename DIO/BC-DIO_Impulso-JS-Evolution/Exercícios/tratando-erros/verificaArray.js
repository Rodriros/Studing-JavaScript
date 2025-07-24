function checkSizeArray(arr, numArray) {
  try {
    if (!arr && !numArray)
      throw new ReferenceError("Por favor, envie os parametros!");

    if (typeof arr != "object")
      throw new TypeError("O parametro arr precisa ser um objeto");

    if (typeof numArray != "number")
      throw new TypeError("O numArray precisa ser um número");

    if (arr.length !== numArray)
      throw new RangeError("O número não é igual ao tamanho do array");

    return arr;
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log("Este é um " + e.name);
      console.log(e.message);
    } else if (e instanceof TypeError) {
      console.log("Este é um " + e.name);
      console.log(e.message);
    } else if (e instanceof RangeError) {
      console.log("Este é um " + e.name);
      console.log(e.message);
    } else {
      console.log("Este é um erro não mapeado" + e);
    }
  }
}
//checkSizeArray();
//checkSizeArray(0, 5);
//checkSizeArray([], "n/a");
//checkSizeArray([1, 2, 3], 7);
console.log(checkSizeArray([1, 2, 3, 4], 4));
