// EXPRESS -> É UM FRAMEWORK QUE FACILITA EGERENCIA E GERENCIA ROTAS, FS, RESPOSTAS, REQUISIÇÕES, ETC 
// PARA INSTALAR: 'npm install express' 

const express = require('express');

// CRIANDO UMA APLICAÇÃO EXPRESS
const app = express()  // CRIA UM OBJETO APARTIR DO EXPRESS

// ESCUTAANDO A REQUISIÇÃO NA PORTA 3000
app.listen(3000);

// CRIANDO AS ROTAS
app.get('/', (req, res) => {  // QUANDO CHAMADA A RAIZ '/' EXECULTA A FUNÇÃO  
    res.send('<h1>Aplicação com express</h1>')  // ENVIA UMA REPOSTA
});

app.get('/about', (req, res) => {  // QUANDO CHAMADA A URL '/ABOUT' EXECULTA A FUNÇÃO  
    res.send('<h1>Sobre nós</h1>');
});



// EXIBINDO UMA PÁGINA HTML -----------------------------------------------------------------------------------------------------
// HÁ DUAS FORMAS:

// 1º FORMA -> INDICAR O CAMINHO ABSOLUTO DO ARQUIVO
app.get('/contact', (req, res) => {
    // res.sendFile('C:/Users/itiel/OneDrive/Documentos/Estudos/Estudos/node.js/Ex 14 - Express/views/contact.html'); // CAMINHO ABSOLUTO
    res.sendFile('./views/contact.html', { root: __dirname });
    res.status(200); // DEFININDO O STATUS CODE
});

// 2º FORMA -> ESPECIFICAR A RAIZ E DEFINIR AS SUAS RELAÇÕES
app.get('/info', (req, res) => {

    // SELECIONA A PASTA ONDE ESTA SENDO EXECULTADA O APP.JS (__DIRNAME) E DEFINE ESTA" COMO A RAIZ.
    // DEPOIS ESPECIFICA O CAMINHO DO ARQUIVO (./VIEWS/INFO.HTML) COMO EXTENÇÃO DA RAIZ -> "__DIRNAME/VIEWS/INFO.HTML"
    res.sendFile('./views/info.html', { root: __dirname });  
    res.status(200); // DEFININDO O STATUS CODE
});

app.get('/services', (req, res) => {
    res.sendFile('./views/services.html', { root: __dirname });
    res.status(200); // DEFININDO O STATUS CODE
});



// REDIRECIONAMENTO -------------------------------------------------------------------------------------------------------------
app.get('/telefone', () => { // SE O USUÁRIO DIGITAR ESSA URL
    app.redirect('./contact');  // SERÁ REDIRECIONADO PARA A PÁGINA 'CONTACT' (MUDA A URL PARA LOCALHOST:3000/CONTACT E CHAMA A FUNÇÃO DO CONTACT)
    res.status(302); // DEFININDO O STATUS CODE
});



// ERROR 404 --------------------------------------------------------------------------------------------------------------------------
app.use((req, res) => { // USE -> DEFINE REGRAS DE NEGÓCIO ENTRE A REQUISIÇÃO E A RESPOSTA (ANTES DE EXIBIR A RESPOSTA CHAMA A FUNÇÃO)
    // TEM QUE ESTAR NO FINAL, POIS NÃO ESPECIFICA A ROTA (OU SEJA, SE O USUÁRIO DIGITAR QUALQUER ROTA DIFERENTE DAS ACIMA EXECULTA O 'USE')
    res.sendFile('./views/404.html', { root: __dirname });
    res.status(404); // DEFININDO O STATUS CODE
})  
