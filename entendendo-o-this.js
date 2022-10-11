// Criei um objeto
const user = {
    nome: "Emanuel Marcos Dos Santos Barboza",
    email: "e.barboza@tigrara.com.br",
    nascimento: "18/04/2003",
    role: "admin",
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email);
    }
}

// Criei uma função para exibir apenas o nome de um objeto
const exibirNome = function(){
    console.log(`Seu nome é: ${this.nome}`);
}

// Likei essa função a um objeto utilizando a função .bind, pois sem ela ele não consegue pegar de um objeto
const exibir = exibirNome.bind(user);

// Mostrando na tela
exibir();