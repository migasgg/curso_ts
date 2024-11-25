const teste = (txt?:string):void => {
  console.log(txt)
}

teste('oi lindo')

const vsoma = (num:number[]):number => {
  let soma:number = 0

  for(let i:number = 0; i < num.length; i++) {
    soma += num[i]
    console.log(num[i])
  }
  
  return soma
}

console.log(vsoma([1, 2, 3, 4]))
