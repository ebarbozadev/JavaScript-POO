import User from "./User";

class Admin extends User {
    constructor(nome, email, nascimento, role = "Admin", ativo = true){
        super(nome, email, nascimento, role, ativo) // Com o super nós declaramos que queremos reaproveitar todas as propriedades, colocamos dentro dela as propriedades que vamos querer
    }
}

const newAdmin = new Admin('Rodrigo', 'R@r.com', "03/08/1981");
console.log()