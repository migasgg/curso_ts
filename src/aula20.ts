class Conta {
  numero:number
  titular:string

  constructor(numero:number, titular:string) {
    this.numero = numero
    this.titular = titular
  }
   
}

class ContaPF extends Conta {

}

const cont1 = new ContaPF(12345678, "Miguel")

console.log(cont1.titular)

