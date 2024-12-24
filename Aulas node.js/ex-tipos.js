//Crie uma variável contendo uma frase. Em seguida, exiba no console o comprimento da frase 
// e a mesma frase com letras maiúsculas.

var fraseQualquer = 'esta é um frase qualquer';

console.log("Esta variável tem "+ fraseQualquer.length +" caracteres");
console.log(fraseQualquer.toUpperCase());

//Declare duas variáveis, uma inicializada com valor null e outra que não recebe atribuição (resultando em undefined). 
// Exiba os valores no console.
var nula = null;
var indefinida;

console.log(nula);
console.log(indefinida);

//Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes 
//tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console.
let numero = 10;
let textoNota = "Sua nota é";
let temNota = true;

console.log(`${textoNota} ${numero}, isso confirma que "temNota" = ${temNota}`);

//Crie uma variável numérica e uma string. Faça a conversão da variável numérica para string 
// e da string para número. Exiba os tipos de dados resultantes no console.

let strnumero = 10;
String(strnumero);
console.log (strnumero);
Number(strnumero);
console.log(strnumero);

//Crie uma variável com uma string e utilize métodos de manipulação de strings, 
//como toUpperCase, toLowerCase, slice ou outros, para modificar a string original. 
//Exiba os resultados finais no console.

let textoQualquer = "Texto De Manipulação";
console.log(textoQualquer.toUpperCase());
console.log(textoQualquer.toLowerCase());

textoQualquer = "texto de manipulação";
console.log(textoQualquer.slice(5));
