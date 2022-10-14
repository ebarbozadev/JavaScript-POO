// Sintaxe padrão da classe
export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true){
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || "Estudante";
        this.#ativo = ativo;
    }

    get nome (){
        return this.#nome;
    }

    get email (){
        return this.#email;
    }

    get nascimento (){
        return this.#nascimento;
    }

    get role (){
        return this.#role;
    }

    get ativo (){
        return this.#ativo;
    }

    // #montaObjUser(){
    //     return ({
    //         nome: this.#nome,
    //         email: this.#email,
    //         nascimento: this.#nascimento,
    //         role: this.#role,
    //         ativo: this.#ativo
    //     })
    // }

    exibirInfos(){
        const objUser = this.#montaObjUser();
        return `${objUser.nome}, ${objUser.email}, ${objUser.nascimento}, ${objUser.role}, ${objUser.ativo}`;
    }
}

// const emanuel = new User("Emanuel", "E@e.com", "18/04/2003");
// console.log(emanuel);
// console.log(emanuel.exibirInfos());