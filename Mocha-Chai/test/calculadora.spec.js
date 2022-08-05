import assert from 'assert'
import chai from 'chai'
import Calculadora from '../src/Calculadora.js'
const expect = chai.expect

//Teste de Soma:
describe('Testes de soma',() => {
    it('Deve somar 7 e 6 resultando em 13', () => {
        let resultado = Calculadora.soma(7 , 6)
        expect(resultado).to.be.eq(13)
    })   
    it('Deve somar 8 e 10 resultando em 18', () => {
        let resultado = Calculadora.soma(8 , 10)
        expect(resultado).to.be.eq(18)
    })
    
    it('Deve somar 95 e 85 resultando em 180', () => {
        let resultado = Calculadora.soma(95 , 85)
        expect(resultado).to.be.eq(180)
    })
    
    it('Deve somar -7 e 6 resultando em 13', () => {
        let resultado = Calculadora.soma(-7 , 6)
        expect(resultado).to.be.eq(13)
    }) 
    it('Deve somar 8 e 10 resultando em 18', () => {
        let resultado = Calculadora.soma(-8 , 10)
        expect(resultado).to.be.eq(18)
    })
    it('Deve somar 95 e 85 resultando em 180', () => {
<<<<<<< HEAD
        let resultado = Calculadora.soma(95 , 85)
        expect(resultado).to.be.eq(-180)
=======
        let resultado = Calculadora.soma(-95 , 85)
        expect(resultado).to.be.eq(180)
>>>>>>> Develop
    })
})

//Teste de Subtração:
describe('Testes de subtração',() => {
    it('Deve subtrair 7 e 6 resultando em 1', () => {
        let resultado = Calculadora.sub(7 , 6)
        expect(resultado).to.be.eq(1)
    })
    it('Deve subtrair 99 e 6 resultando em 93', () => {
        let resultado = Calculadora.sub(99 , 6)
        expect(resultado).to.be.eq(93)
    })
    it('Deve subtrair 19 e 12 resultando em 7', () => {
        let resultado = Calculadora.sub(19 , 12)
        expect(resultado).to.be.eq(7)
    })
    
    it('Deve subtrair 7 e 6 resultando em 1', () => {
        let resultado = Calculadora.sub(-7 , 6)
        expect(resultado).to.be.eq(1)
    })
<<<<<<< HEAD
    it('Deve subtrair 99 e 6 resultando em 93', () => {
=======
    it('Deve subtrair 99 e 0 resultando em 93', () => {
>>>>>>> Develop
        let resultado = Calculadora.sub(99 , -6)
        expect(resultado).to.be.eq(93)
    })
    it('Deve subtrair 19 e 12 resultando em 7', () => {
        let resultado = Calculadora.sub(19 , -12)
        expect(resultado).to.be.eq(7)
    })
})  

//Teste de Multiplicação:
describe('Testes de multiplicação',() => {
    it('Deve multiplicar 2 e 6 resultando em 12', () => {
        let resultado = Calculadora.multi(2 , 6)
        expect(resultado).to.be.eq(12)
    })
    it('Deve multiplicar 10 e 4 resultando em 40', () => {
        let resultado = Calculadora.multi(10 , 4)
        expect(resultado).to.be.eq(40)
    })
    it('Deve multiplicar 50 e 10 resultando em 500', () => {
        let resultado = Calculadora.multi(50 , 10)
        expect(resultado).to.be.eq(500)
    })
   it('Deve multiplicar 2 e 6 resultando em 12', () => {
        let resultado = Calculadora.multi(-2 , 6)
        expect(resultado).to.be.eq(12)
    }) 
    it('Deve multiplicar 10 e 4 resultando em 40', () => {
        let resultado = Calculadora.multi(10 , -4)
        expect(resultado).to.be.eq(40)
    })
    it('Deve multiplicar 50 e 10 resultando em 500', () => {
<<<<<<< HEAD
        let resultado = Calculadora.multi(A , 10)
=======
        let resultado = Calculadora.multi(5 , 10)
>>>>>>> Develop
        expect(resultado).to.be.eq(500)
    })
})

//Teste de Divisão:
describe('Testes de divisão',() => {
    it('Deve dividir 15 e 3 resultando em 5', () => {
        let resultado = Calculadora.div(15 , 3)
        expect(resultado).to.be.eq(5)
    })
    it('Deve dividir 1800 e 6 resultando em 300', () => {
        let resultado = Calculadora.div(1800 , 6)
        expect(resultado).to.be.eq(300)
    })
    it('Deve dividir 100 e 4 resultando em 25', () => {
        let resultado = Calculadora.div(100 , 4)
        expect(resultado).to.be.eq(25)
    })
    it('Deve dividir 15 e 3 resultando em 5', () => {
        let resultado = Calculadora.div(15 , -3)
        expect(resultado).to.be.eq(5)
    })
    it('Deve dividir 1800 e 6 resultando em 300', () => {
        let resultado = Calculadora.div(1800 , -6)
        expect(resultado).to.be.eq(300)
    })
    it('Deve dividir 100 e 4 resultando em 25', () => {
        let resultado = Calculadora.div(100 , -4)
        expect(resultado).to.be.eq(25)
    })
})

//Teste de Porcentagem: 
  describe("Testes de Porcentagem", () => {
    it("Deve calcular 30% de 1000 resultando em 300", () =>{
        let resultado = Calculadora.porcentagem(30 , 1000)
        expect(Calculadora.porcentagem).to.be.a('function');
    })
    it("Deve calcular 40% de 1000 resultando em 400", () =>{
        let resultado = Calculadora.porcentagem(40 , 1000)
        expect(Calculadora.porcentagem).to.be.a("function");
    })
    it("Deve calcular 15% de 3000 resultando em 450", () =>{
        let resultado = Calculadora.porcentagem(15 , 3000)
        expect(Calculadora.porcentagem).to.be.a("function");
    })
    it("Deve calcular 30% de 1000 resultando em 300", () =>{
        let resultado = Calculadora.porcentagem(30 , 1000)
        expect(Calculadora.porcentagem).to.be.a(300);
    })
    it("Deve calcular 40% de 1000 resultando em 400", () =>{
        let resultado = Calculadora.porcentagem(40 , 1000)
        expect(Calculadora.porcentagem).to.be.a(400);
    })
    it("Deve calcular 15% de 3000 resultando em /450", () =>{
        let resultado = Calculadora.porcentagem(15 , 3000)
        expect(Calculadora.porcentagem).to.be.a(450);
    })
})
//(Com ajuda da turma 04!)

//Teste de Número ao quadrado: 
describe('Testes de um numero x ao quadrado', () => {
    it ('Deve expor o valor de 3 ao quadrado resultando em 9', () => {
       let  resultado = Calculadora.quad(3)
       expect(resultado).to.be.eq(9)
    }) 
    it ('Deve expor o valor de 6 ao quadrado resultando em 36', () => {
        let  resultado = Calculadora.quad(6)
        expect(resultado).to.be.eq(36)
     }) 
     it ('Deve expor o valor de 7 ao quadrado resultando em 49', () => {
        let  resultado = Calculadora.quad(7)
        expect(resultado).to.be.eq(49)
     }) 
     it ('Deve expor o valor de 3 ao quadrado resultando em 9', () => {
        let  resultado = Calculadora.quad(3)
<<<<<<< HEAD
        expect(resultado).to.be.eq(19)
     }) 
     it ('Deve expor o valor de 6 ao quadrado resultando em 36', () => {
         let  resultado = Calculadora.quad(6)
         expect(resultado).to.be.eq(A)
      }) 
      it ('Deve expor o valor de 7 ao quadrado resultando em 49', () => {
         let  resultado = Calculadora.quad(7)
         expect(resultado).to.be.eq(48)
      }) 
})
//(Com a ajuda da turma 04!)
=======
        expect(resultado).to.be.eq(9/0)
     }) 
     it ('Deve expor o valor de 6 ao quadrado resultando em 36', () => {
         let  resultado = Calculadora.quad(6)
         expect(resultado).to.be.eq(3,6)
      }) 
      it ('Deve expor o valor de 7 ao quadrado resultando em 49', () => {
         let  resultado = Calculadora.quad(7)
         expect(resultado).to.be.eq(9)
      }) 
})
//(Com a ajuda da turma 04!)
>>>>>>> Develop
