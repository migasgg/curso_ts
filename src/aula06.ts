let numeros:number[] = [10, 20, 40];
//let numeros:Array<number> = [10, 20, 40];
// let numeros: (number|string)[] = [10, 20, 40]

numeros.push(50)
numeros.unshift(10)
numeros.pop();
console.log(numeros)

let numerosRo:ReadonlyArray<number> = [100, 200, 300]

console.log(numerosRo)