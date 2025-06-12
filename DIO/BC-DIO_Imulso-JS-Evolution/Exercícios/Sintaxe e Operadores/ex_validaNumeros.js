// 1. Importar a biblioteca para ler a entrada do usuário no terminal
const readline = require('readline-sync');

console.log("Olá Mestre, vamos ao teste!");

function validaNumeros() {
    // 2. Usar readline.question para capturar os números (e convertê-los)
    const valorX = Number(readline.question('Insira o num1: '));
    const valorY = Number(readline.question('Agora insira o num2: '));

    // 3. Calcular a soma primeiro
    const soma = valorX + valorY;

    // 4. Realizar as comparações lógicas
    const alt1 = valorX === valorY ? 'são iguais' : 'não são iguais';
    const alt2 = soma > 10 ? "maior que 10" : "menor ou igual a 10";
    const alt3 = soma < 20 ? "menor que 20" : "maior ou igual a 20";

    // 5. Corrigir a string de saída
    console.log(`Os números num1 e num2 ${alt1}. Sua soma é ${soma}, que é ${alt2} e ${alt3}.`);
}

validaNumeros();