// Sintaxe padrão da classe
export default class User {
    constructor(nome, email, nascimento, role, ativo = true){
        this.nome = nome;
        this.email = email;
        this.role = role || "Estudante";
        this.ativo = ativo;
    }

    exibirInfos(){
        return `${this.nome}, ${this.email}`;
    }
}

// const emanuel = new User("Emanuel", "E@e.com", "18/04/2003");
// console.log(emanuel);
// console.log(emanuel.exibirInfos());