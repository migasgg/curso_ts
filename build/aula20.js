"use strict";
class Conta {
    numero;
    titular;
    constructor(numero, titular) {
        this.numero = numero;
        this.titular = titular;
    }
}
class ContaPF extends Conta {
}
const cont1 = new ContaPF(12345678, "Miguel");
console.log(cont1.titular);
