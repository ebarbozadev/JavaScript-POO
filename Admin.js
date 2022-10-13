import User from "./User.js";

export default class Admin extends User {
    constructor(nome, email, nascimento, role = "Admin", ativo = true){
        super(nome, email, nascimento, role, ativo) // Com o super nós declaramos que queremos reaproveitar todas as propriedades, colocamos dentro dela as propriedades que vamos querer
    }

    criarCurso(nomeDoCurso, vagas){
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas!`;
    }
}

// const newAdmin = new Admin('Rodrigo', 'R@r.com', "03/08/1981");
// console.log(newAdmin.criarCurso("Análise e Desenvolvimento de Sistemas", 70));