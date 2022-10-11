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