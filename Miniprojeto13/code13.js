//Exercício de postagem de blog
/*
titulo
mensagem
autor
vizualizações
comentários
 (autor,mensagem)
 estaAoVivo
 */



 let postagem = {
    Título: 'Acorda pedrinho',
    Mensagem: 'Música do momento?',
    Autor: 'Tamara Gleice',
    Visualizações: 11,
    Comentários: [
        { Autor: 'Amanda Paz', Mensagem: 'Essa música já deu.'},
        { Autor: 'Cleonice Alves',Mensagem: 'Bah guria nem conheço essa música;'}
    ],
    estaAoVivo : true
 }

 console.log(postagem);