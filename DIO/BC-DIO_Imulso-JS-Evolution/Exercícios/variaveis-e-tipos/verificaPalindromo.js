function verificaPalindromo(str) {
  const strLimpa = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  const strInvertida = strLimpa.split("").reverse().join("");

  if (strLimpa === strInvertida) {
    return console.log("É um palíndromo");
  } else return console.log("Não é palíndromo");
}

verificaPalindromo("arara");
verificaPalindromo("Ovo");
verificaPalindromo("Anotaram a data da maratona");
verificaPalindromo("javascript");
