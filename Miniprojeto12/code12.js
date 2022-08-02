function Endereco(Rua,Cidade,CEP) {
    this.Rua = Rua,
    this.Cidade = Cidade,
    this.CEP = CEP
}
const endereco1 = new Endereco('a','b','c');
const endereco2 = new Endereco('a','b','c');
const endereco3 = endereco1
function saoIguais(endereço1,endereco2) {
    return endereco1.Rua === endereco2.Rua &&
             endereco1.Cidade === endereco2.Cidade &&
             endereco1.CEP == endereco2.CEP
}

console.log(saoIguais(endereco1,endereco2));
function temEnderecoMemoriaIguais(endereço1,endereco2) {
    return endereco1 === endereco3; 
}

console.log(temEnderecoMemoriaIguais(endereco1,endereco2));
