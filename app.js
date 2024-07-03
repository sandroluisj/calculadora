const prompt = require('prompt-sync')({sigint: true})
let numero1 = prompt('digite o primeiro numero ') 
let operador = prompt('digite o operardor')
let numero2 = prompt('digite o segundo numero ')

 
 numero1 = parseFloat(numero1)
 numero2 = parseFloat(numero2)

   
function calcular (numero1,numero2,operador){
    switch (operador){
    case '+':
      return numero1 + numero2
        break
    case '-':
      return numero1 - numero2
        break
    case '*':
      return numero1 * numero2
            break
    case '/':
      return numero1 / numero2
        break
        case '%':
        return (numero1 * numero2) / 100
        break
        default:
            return 'operador invalido'
    }

    }
   
    console.log(calcular(numero1,numero2,operador))
   process.exit()