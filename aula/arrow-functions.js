var nome = 'newton'


//funçao tradicional antes de 2015

function soma(a,b){
    return console.log(a+b);
}

//soma(1,2);

// arrow function

const somaArrow = (num1,num2) => num1 + num2 

console.log(somaArrow(1,1));


const maiorIdadeTernario = (idade) => {

    return idade >= 18 ? 'Maior idade' : 'Menor idade'
}

console.log( `${nome} é ${maiorIdadeTernario(1)}` );