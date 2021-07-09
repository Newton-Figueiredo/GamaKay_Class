var nome = 'newton'


//escrever condicionais da maneira antiga (tradicional)

function maiorIdade(idade){

        if (idade >= 18) {
            return console.log(`Maior de idade`)
        }
        else{
            return console.log(`Menor de idade`)
        }
}

//maiorIdade(18);

// usando operador ternario 

function maiorIdadeTernario(idade){

    return idade >= 18 ? 'Maior idade' : 'Menor idade'
}

console.log( `${nome} é ${maiorIdadeTernario(1)}` );