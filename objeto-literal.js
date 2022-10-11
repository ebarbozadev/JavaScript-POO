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

const usuario = {
	nome: "Emanuel",
	idade: 19,
	email: "e.barboza@edu.unipar.br",
	salario: 100,
	depositarSalario: function(valor){
		this.salario += valor;
	},
	verSalario: function(){
		console.log(`Seu salário é ${this.salario}`);
	}
}

console.log(usuario.verSalario());

usuario.depositarSalario(200);

console.log(usuario.verSalario());