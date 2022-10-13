function Usuario(nome, email){
    this.nome = nome;
    this.email = email;
    this.exibirInfo = function(){
        console.log(`${this.nome}, ${this.email}`);
    }
}

// Criamos um novo construtor de objeto a partir do "new"
const emanuel = new Usuario("Emanuel", "e@e.com");
emanuel.exibirInfo()