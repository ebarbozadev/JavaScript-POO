// function Usuario(nome, email){
//     this.nome = nome;
//     this.email = email;
//     this.exibirInfo = function(){
//         console.log(`${this.nome}, ${this.email}`);
//     }
// }

// function Admin(role){
//     Usuario.call(this, "Emanuel", "E@e.com");
//     this.role = role || "estudante";
// }

// // Passando para dentro do protótipo do Admin, as propriedades de user
// Admin.prototype = Object.create(Usuario.prototype);

// const usuarioAdmin = new Admin('Admin');
// console.log(usuarioAdmin.exibirInfo());
// console.log(usuarioAdmin.role);

// Criando um objeto do tipo literal
const user = {
    exibirInfos: function(nome){
        console.log(nome);
    }
}

// Criando um novo objeto com as propriedades e métodos de "user"
const novoUser = Object.create(user);
// Com o novo objeto, utilizando o método de "user"
console.log(novoUser.exibirInfos("Emanuel"));
// Verificar se o objeto "novoUser" é mesmo um protótipo de "user"
console.log(user.isPrototypeOf(novoUser))