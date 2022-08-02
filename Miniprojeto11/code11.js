//Javascript - Objeto Endereço

//Criar um objeto endereço que contem:
//Rua
//Cidade
//Cep
//exibirEndereco(endereco)

let endereco = {
    Rua: 'Cosmópolis',
    Numero: '200',
    Bairro: 'Vila Virginia',
    Complemento: 'Bloco 01 apartamento 10',
    Cidade: 'Itaquaquecetuba',
    Cep:'08576230'
};

function exibirEndereco(endereco) {
    for (let chave in endereco)
    console.log(chave,endereco[chave]);
}

exibirEndereco(endereco);
