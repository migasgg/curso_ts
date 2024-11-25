"use strict";
class Computador {
    nome = 'rx580';
    ram = 2060;
    cpu = 5600;
    ligado = true;
}
const comp1 = new Computador();
const comp2 = new Computador();
const comp3 = new Computador();
comp1.nome = 'Migas';
comp2.nome = 'ebaeba';
comp3.nome = 'uiui';
console.log(comp1.nome);
console.log(comp2.nome);
console.log(comp3.nome);
