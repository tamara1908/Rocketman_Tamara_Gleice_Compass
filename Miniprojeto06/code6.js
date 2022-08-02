//Criar um método para ler propriedades de um objeto e
//exibir somente as propriedades do tipo string que estão nesse objeto

const filme = {
    titulo : 'Diário de uma paixão',
    ano : 2004,
    diretor: 'Nick Cassavetes',
    personagem: 'Allie hamilton'
}
exibirPropriedades(filme);
function exibirPropriedades(obj) {
    for (prop in obj)
         if (typeof obj[prop] === 'string')
              console.log(prop,obj[prop])
}