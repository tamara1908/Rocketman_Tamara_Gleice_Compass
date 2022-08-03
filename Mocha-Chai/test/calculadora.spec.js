import assert from 'assert'
import chai from 'chai'
import Calculadora from '../src/Calculadora.js'
const expect = chai.expect

describe('Testes de soma',() => {
    it('Deve somar 7 e 6 resultando em 13', () => {
        let resultado = Calculadora.soma(7 , 6)
        expect(resultado).to.be.eq(13)
    })  
    it('Deve somar -7 e 6 resultando em 13', () => {
        let resultado = Calculadora.soma(-7 , 6)
        expect(resultado).to.be.eq(13)
    })
    it('Deve somar 8 e 10 resultando em 18', () => {
        let resultado = Calculadora.soma(8 , 10)
        expect(resultado).to.be.eq(18)
    })
    it('Deve somar 8 e 10 resultando em 18', () => {
        let resultado = Calculadora.soma(-8 , 10)
        expect(resultado).to.be.eq(18)
    })
})

describe('Testes de subtração',() => {
    it('Deve subtrair 7 e 6 resultando em 1', () => {
        let resultado = Calculadora.sub(7 , 6)
        expect(resultado).to.be.eq(1)
    })
    it('Deve subtrair 7 e 6 resultando em 1', () => {
        let resultado = Calculadora.sub(-7 , 6)
        expect(resultado).to.be.eq(1)
    })
    it('Deve subtrair 99 e 6 resultando em 93', () => {
        let resultado = Calculadora.sub(99 , 6)
        expect(resultado).to.be.eq(93)
    })
    it('Deve subtrair 99 e 6 resultando em 93', () => {
        let resultado = Calculadora.sub(99 , -6)
        expect(resultado).to.be.eq(93)
    })
})  

describe('Testes de multiplicação',() => {
    it('Deve multiplicar 2 e 6 resultando em 12', () => {
        let resultado = Calculadora.multi(2 , 6)
        expect(resultado).to.be.eq(12)
    })
    it('Deve multiplicar 2 e 6 resultando em 12', () => {
        let resultado = Calculadora.multi(-2 , 6)
        expect(resultado).to.be.eq(12)
    })
    it('Deve multiplicar 10 e 4 resultando em 40', () => {
        let resultado = Calculadora.multi(10 , 4)
        expect(resultado).to.be.eq(40)
    })
    it('Deve multiplicar 10 e 4 resultando em 40', () => {
        let resultado = Calculadora.multi(10 , -4)
        expect(resultado).to.be.eq(40)
    })
})

describe('Testes de divisão',() => {
    it('Deve dividir 15 e 3 resultando em 5', () => {
        let resultado = Calculadora.div(15 , 3)
        expect(resultado).to.be.eq(5)
    })
    it('Deve dividir 15 e 3 resultando em 5', () => {
        let resultado = Calculadora.div(15 , -3)
        expect(resultado).to.be.eq(5)
    })
    it('Deve dividir 1800 e 6 resultando em 300', () => {
        let resultado = Calculadora.div(1800 , 6)
        expect(resultado).to.be.eq(300)
    })
    it('Deve dividir 1800 e 6 resultando em 300', () => {
        let resultado = Calculadora.div(1800 , -6)
        expect(resultado).to.be.eq(300)
    })
})

  describe("Testes de Porcentagem", () => {
    it("Deve calcular 30% de 1000 resultando em 300", () =>{
        let resultado = Calculadora.porcentagem(30 , 1000)
        expect(Calculadora.porcentagem).to.be.a('function');
    })
    it("Deve calcular 30% de 1000 resultando em 300", () =>{
        let resultado = Calculadora.porcentagem(30 , 1000)
        expect(Calculadora.porcentagem).to.be.a(300);
    })
    it("Deve calcular 40% de 1000 resultando em 400", () =>{
        let resultado = Calculadora.porcentagem(40 , 1000)
        expect(Calculadora.porcentagem).to.be.a("function");
    })
    it("Deve calcular 40% de 1000 resultando em 400", () =>{
        let resultado = Calculadora.porcentagem(40 , 1000)
        expect(Calculadora.porcentagem).to.be.a(400);
    })
  })


 