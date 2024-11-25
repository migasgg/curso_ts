"use strict";
class Computador {
    nome;
    ram;
    cpu;
    ligado;
    constructor(nome, ram, cpu) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
    }
    info() {
        console.log("Nome..: " + this.nome);
        console.log("Ram...: " + this.ram);
        console.log("Cpu...: " + this.cpu);
        console.log(`Ligado: ${this.ligado ? "Sim" : "Não"}`);
        console.log('--------------------');
    }
    ligar() {
        this.ligado = true;
    }
    desligas() {
        this.ligado = false;
    }
}
const comp1 = new Computador('Empresarial', 8, 'i5 6gen');
const comp2 = new Computador('Estudos', 4, 'i3 8gen');
const comp3 = new Computador('Gamer', 16, 'r 5600');
//console.log(comp1.nome)
//console.log(comp2.nome)
//console.log(comp3.nome)
comp1.ligar();
comp1.info();
comp2.info();
comp3.info();
