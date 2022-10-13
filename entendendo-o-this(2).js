// Jeitos diferentes de apresentarmos objetos diferentes em tela
// Possibilidades: .call(), .bind() e 
const usuario1 = {
    nome: "Emanuel",
    idade: 19
}

const usuario2 = {
    nome: "Eduarda",
    idade: 32
}

function exibirUsuario(){
    console.log(`Olá ${this.nome}! Nossa nem sabia que você tinha ${this.idade} anos..`);
}

exibirUsuario.call(usuario2);