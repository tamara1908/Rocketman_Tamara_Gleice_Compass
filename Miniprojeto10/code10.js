//Criar função para mostrar os números primos

//Compostos
//Ex: 10 pode ser dividido por: 1,2,4,5,10 ou seja não é um numero primo

//Primos
//divisivel por 1 ou por ele mesmo
//11 pode ser dividido somente por 1 e por 11 ou seja é um numero primo!

//exibirNumerosPrimos(15)

//function exibirNumerosPrimos(limite){
//      for(let numero = 2; numero <= limite; numero++){
//            let ehPrimo = true;
//
//           for (let divisor = 2; divisor < numero; divisor++){
//                 if(numero % divisor === 0) {
//                        ehPrimo = false;
//                        break;
//                  }
//           }
//            
//            if(ehPrimo) console.log(numero);
//      }
//} Maneira com mais limpa abaixo;

exibirNumerosPrimos(15)

function exibirNumerosPrimos(limite){
      for(let numero = 2; numero <= limite; numero++){
            if (NumeroPrimo(numero)) console.log(numero);
      }
}

function NumeroPrimo(numero) {
     for (let divisor = 2; divisor < numero; divisor++){
                  if(numero % divisor === 0) {
                        return false;
                  }
     }
     return true;       
}




