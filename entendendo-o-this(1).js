const usuario = {
    nome: "Usuariozinho",
    telefone: "+55 44 99999-9999",
    cpf: "999.999.999-99"
}

const exibirCPF = function(){
    console.log(`Seu CPF é: ${this.cpf}`);
}

const CPF = exibirCPF.bind(usuario);

CPF();