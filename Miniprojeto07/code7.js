//Criar função somar que retorna a
//soma de todos os múltiplos de 3 e 5

//Múltiplos de 3
//3,6,9
//Múltiplos de 5
//5,10

//Somando os múltiplos
//armazenar os múltiplos de 3
//armazenar os múltiplos de 5
//somar os dois

somar(10);
function somar(limite){
   let multiplosDe3 = 0;
   let multiplosDe5 = 0;
   for(i =0;i<= limite;i++){
    if(i % 3 === 0)
     multiplosDe3 += i;
     if(i % 5 === 0)
     multiplosDe5 += i;
   }
   console.log(multiplosDe3 + multiplosDe5);
}