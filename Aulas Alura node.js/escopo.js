let estudante;

if (1 > 0){
    estudante = 'Rodrigo';
    console.log(estudante);
}

console.log(estudante);


if (true) {
    let num1 = 10; //Let não é acessivel fora do escopo do bloco de if
    var num2 = 20;
}
num1 = 15;
console.log(num1,num2);