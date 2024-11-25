"use strict";
const teste = (txt) => {
    console.log(txt);
};
teste('oi lindo');
const vsoma = (num) => {
    let soma = 0;
    for (let i = 0; i < num.length; i++) {
        soma += num[i];
        console.log(num[i]);
    }
    return soma;
};
console.log(vsoma([1, 2, 3, 4]));
