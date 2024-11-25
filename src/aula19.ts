class Computador {
  private id?:number
  public nome:string;
  private ram:number
  private cpu:string;
  private ligado:boolean

  constructor(nome:string,ram:number,cpu:string, id?:number) {
    this.id = id
    this.nome = nome
    this.ram = ram
    this.cpu = cpu
    this.ligado = false
  }

  info():void {
    console.log("Nome..: " + this.nome)
    console.log("Ram...: " + this.ram)
    console.log("Cpu...: " + this.cpu)
    console.log(`Ligado: ${this.ligado?"Sim":"Não"}`)
    console.log('--------------------')
  }

  ligar():void {
    this.ligado=true
  }

  desligas():void {
    this.ligado=false
  }

  upRam(qtde:number):void {
    if(qtde > 0 && qtde <= 1000) {
      this.ram = qtde
    }
    else {
      console.log(`Quantidade ${qtde} não é permitida`)    
    }
  }
}

const comp1 = new Computador('Empresarial', 8, 'i5 6gen')
const comp2 = new Computador('Estudos', 4, 'i3 8gen')
const comp3 = new Computador('Gamer', 16, 'r 5600')

comp1.ligar()

comp1.upRam(-100)

comp1.info()
comp2.info()
comp3.info()