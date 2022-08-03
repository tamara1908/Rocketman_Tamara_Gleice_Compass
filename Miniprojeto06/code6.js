//Criar um método para ler propriedades de um objeto e
//exibir somente as propriedades do tipo string que estão nesse objeto
const filme = {
    Título : 'Barbie em a Princesa e a Plebeia',
    Ano : 2004,
    Diretor: 'William Lau',
    Personagem: 'Princesa Anneliese',
    Personagem: 'Érika',
    Personagem: 'Wolfie gatinho'
}
exibirPropriedades(filme);
function exibirPropriedades(obj) {
    for (prop in obj)
         if (typeof obj[prop] === 'string')
              console.log(prop,obj[prop])
}