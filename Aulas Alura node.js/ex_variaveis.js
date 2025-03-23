//Declare três variáveis diferentes (uma para cada tipo: string, número e booleano) 
// e atribua valores a elas. Em seguida, exiba o tipo de cada variável no console.

var firstName = 'Rodrigo';
var year = 1992;
var alternative = true;

console.log('A variável firstName é do tipo',typeof(firstName));
console.log('A variável year é do tipo',typeof(year));
console.log('A variável Alternative é do tipo',typeof(alternative));

//Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. 
//Em seguida, combine-as em uma terceira variável usando o operador + e em uma quarta 
// variável usando template strings. Por fim, imprima os resultados obtidos no console.

{   let firstName = 'Rodrigo';
    let lastName = 'Rosales';
    let fullName = firstName + lastName;
    let fullName2 = `${firstName} ${lastName}`;

    console.log(fullName,"\n",fullName2);
}

//Declare duas variáveis, uma contendo um número e outra contendo uma string. Em seguida, 
//combine-as em uma terceira variável usando template strings para montar uma frase e exiba o resultado no console.

const nameAndYear = `Meu nome é ${firstName} e nasci em ${year}`;
console.log(nameAndYear);


//Crie uma variável inicializada com um valor de qualquer tipo e, em seguida, 
//reatribua um novo valor a essa variável. Imprima ambos os valores no console após atribuí-los.
{
    let variable1 = 1;
    console.log(variable1);
    variable1 = 'Um';
    console.log(variable1);
}

//Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse bloco.
//Tente acessar essas variáveis dentro do bloco e fora dele utilizando console.log e analise os resultados.
//Faça o mesmo processo utilizando let e compare com os resultados anteriores.

if(1>0){
    var time = '13:30';
    let time1 = '14:00';
}

let time2 = '14:30';
console.log(time,time2);


//Declare uma variável booleana que informa se está chovendo e utilize-a em uma estrutura condicional (if)
//para exibir uma mensagem informando se é preciso levar um guarda-chuva ou não dependendo do valor da variável.

const getRandomIntegerInclusive = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
  
    return Math.floor(Math.random() * (max - min + 1)) + min
  };

const rain = getRandomIntegerInclusive(0,1);

if(rain == true){
console.log("Você deve levar o guarda-chuva");
} else {
    console.log("Não precisa de guarda-chuva")
};