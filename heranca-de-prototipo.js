const user = {
    nome: "Emanuel Marcos Dos Santos Barboza",
    email: "e.barboza@tigrara.com.br",
    nascimento: "18/04/2003",
    role: "estudante",
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email);
    }
}

const admin = {
    nome: "Roberto",
    email: "admin@gmail.com",
    role: "admin",
    criarCruso: function(){
        console.log('Curso criado');
    }
}

// Queremos utilizar o "exibirInfos()" no objeto admin também, mas não queremos reutilizar o código
// setPrototypeOf() utiliza dois parâmetros, o 1º é o objeto que vai herdar e o 2º parâmetro é o objeto que vamos pegar o componente
Object.setPrototypeOf(admin, user);
admin.criarCruso();
admin.exibirInfos();