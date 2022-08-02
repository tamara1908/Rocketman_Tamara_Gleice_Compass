// Velocidade máxima de 70km
// a cada 5km acima do limite você ganha 1 ponto
//Math.Floor()
//caso os pontos sejam maior que 12 --> "Carteira Suspendida"
verificarVelocidade(200);

function verificarVelocidade(velocidade) {
   const velocidadeMaxima = 70;
   const KmPorPonto = 5;
if (velocidade <= 70)
    console.log('ok');
else {
   const pontos = Math.floor(((velocidade - velocidadeMaxima) / KmPorPonto));
   if (pontos >= 12)
   console.log('Carteira suspensa');
   else 
   console.log('Pontos',pontos);
}
}