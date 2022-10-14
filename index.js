import User from './User.js';
import Admin from './Admin.js';
import Docente from './Docente.js';

const newUser = new User('Emanuel', 'e@e.com', '18/04/2003');
console.log(newUser.exibirInfos());

const newAdmin = new Admin('Rafael', 'r@r.com', '31/05/1989');
console.log(newAdmin.nome);


// Privados, não podem ser mudados
// newUser.#nome = 'Gabriel';
// newUser.#email = 'g@g.com';
// newUser.#nascimento = '20/08/1989';
// console.log(newUser);