"use strict";
let dados = {
    nome: "migasdilas",
    idade: 20,
    status: "A",
    ola: () => console.log('Oi'),
    info: (p) => { console.log(p); }
};
dados.nome = "Albertinhopdp";
console.log(typeof (dados));
console.log(dados.nome);
dados.ola();
dados.info(dados.nome);
