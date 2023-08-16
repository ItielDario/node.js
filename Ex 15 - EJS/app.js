//TEMPLATE ENGINE -> É UMA FERRAMENTA UTILIZADA PARA FACILITAR A CRIAÇÃO DE PÁGINAS HTML DINÂMICAS (INSERINDO VARIÁVEIS NO HTML)
// EJS = É UM TEMPLATE ENGINE PARA JAVASCRIPT QUE PERMITE CRIAR PÁGINAS WEB DINÂMICAS E FORMA FÁCIL E ORGANIZADA

const express = require('express');

// CRIANDO UMA APLICAÇÃO EXPRESS
const app = express()  

// REGISTRAR UM TEMPLATE ENGINE (VIEW ENGINE)
app.set('view engine', 'ejs'); // DEFINE QUE A FORMA QUE IREMOS CRIAR ARQUIVOS DINÂMICOS É ATRAVES DO EJS (SET -> FAZ UMA CONFIGURAÇÃO GLOBAL)

// ESCUTAANDO A REQUISIÇÃO NA PORTA 3000
app.listen(3000);

// CRIANDO AS ROTAS
app.get('/', (req, res) => {  
    res.send('<h1>Aplicação com express</h1>')  
});

app.get('/about', (req, res) => {  
    res.send('<h1>Sobre nós</h1>');
});



// EXIBINDO UMA PÁGINA HTML -----------------------------------------------------------------------------------------------------

// 1º FORMA -> INDICAR O CAMINHO ABSOLUTO DO ARQUIVO
app.get('/contact', (req, res) => {
    res.sendFile('./views/contact.html', { root: __dirname });
    res.status(200); 
});

// 2º FORMA -> ESPECIFICAR A RAIZ E DEFINIR AS SUAS RELAÇÕES
app.get('/info', (req, res) => {
    res.sendFile('./views/info.html', { root: __dirname });  
    res.status(200); 
});

app.get('/services', (req, res) => {
    res.sendFile('./views/services.html', { root: __dirname });
    res.status(200); 
});


// EJS
app.get('/teste-ejs', (req, res) => {
    res.render('inicio')  // PRIMEIRO ANALISA O CONTEÚDO DO ARQUIVO E DEPOIS EXIBE (PROCURA NA PASTA VIEWS UM ARQUIVO COM EXTENÇÃO EJS)
});


// REDIRECIONAMENTO -------------------------------------------------------------------------------------------------------------
app.get('/telefone', () => { 
    app.redirect('./contact'); 
    res.status(302); 
});



// ERROR 404 --------------------------------------------------------------------------------------------------------------------------
app.use((req, res) => { 
    res.sendFile('./views/404.html', { root: __dirname });
    res.status(404); 
})  
