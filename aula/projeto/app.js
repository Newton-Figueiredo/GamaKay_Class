const livros = require('./database')

//console.log(livros)

//receber input 
// chamando a lib que tem a função de receber um input
const readLine = require('readline-sync')
// criando a variavel do input
const buscaLivro = readLine.question('Deseja buscar um livro? S/N')

//console.log(buscaLivro)

if (buscaLivro === 'S' || 's'){
    console.log('As categorias disponiveis são: ')
    console.log('ficção', '/putaria','/romance','/fantasia','/auto-ajuda')
    const categoriaEscolhida = readLine.question('Qual categoria voce escolhe ?')
    const retornoLivros = livros.filter(livro => livro.categoria === categoriaEscolhida)
    console.table(retornoLivros)

}
else if (buscaLivro === 'N' || 'n'){
    const livrosOrganizados = livros.sort((a,b) => a.paginas - b.paginas)
    console.log('esses sao os livros disponiveis :')
    console.table(livrosOrganizados)


}