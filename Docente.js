import User from "./User.js";

export default class Docente extends User {
    constructor(nome, email, nascimento, role = "Docente", ativo = true){
        super(nome, email, nascimento, role, ativo) // Com o super nós declaramos que queremos reaproveitar todas as propriedades, colocamos dentro dela as propriedades que vamos querer
    }

    aprovarEstudante(estudante, curso){
        return `${estudante} do curso ${curso}, aprovado!`;
    }
}

// const novoDocente = new Docente("Roni", "R@r.com", "19/08/1987");
// console.log(novoDocente);
// console.log(novoDocente.aprovarEstudante("Leonardo", "Direito"));