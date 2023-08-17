//TEMPLATE ENGINE -> É UMA FERRAMENTA UTILIZADA PARA FACILITAR A CRIAÇÃO DE PÁGINAS HTML DINÂMICAS (INSERINDO VARIÁVEIS NO HTML)
// EJS = É UM TEMPLATE ENGINE PARA JAVASCRIPT QUE PERMITE CRIAR PÁGINAS WEB DINÂMICAS E FORMA FÁCIL E ORGANIZADA

const express = require('express');

const app = express()  


// REGISTRAR UM TEMPLATE ENGINE (VIEW ENGINE)
app.set('view engine', 'ejs'); // DEFINE QUE A FORMA QUE IREMOS CRIAR ARQUIVOS DINÂMICOS É ATRAVES DO EJS (SET -> FAZ UMA CONFIGURAÇÃO GLOBAL)


app.listen(3000);


// CRIANDO AS ROTAS
app.get('/', (req, res) =>{
    res.render('home', { title: "Home" });  // PASSA UM OBJETO COMO PARÂMETRO PARA O 'HOME.EJS'
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: "Contato" })
    res.status(200); 
});

app.get('/info', (req, res) => {
    res.render('info', { title: "Informações" });  
    res.status(200); 
});

app.get('/services', (req, res) => {
    res.render('services', { title: "Serviços" });
    res.status(200); 
});


// ERROR 404
app.use((req, res) => { 
    res.status(404).render('404', { title: "ERROR - 404" }); 
});
