// MAIS SOBRE ROTAS -> https://expressjs.com/pt-br/guide/routing.html 
// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes

const express = require('express');

const app = express();

app.listen(8080);

app.set('view engine', 'ejs');


// QUANDO CHAMADA A ROTA '/TESTE' EXECULTA A FUNÇÃO PARA QUALQUER TIPO DE MÉTODO (GET, POST, DELETE, PUT)
app.all('/teste', (req, res, next) => { 
    console.log('Teste no console');
    next();
})  


// ROUTES
app.get('/', (req, res) => {

    res.send('home');
});

app.get('/teste', (req, res) => {

    res.send('Página teste');
});


// ROTAS BASEADAS EM CAMINHOS DE CARACTERES:
app.get('/ab*cd', (req, res) => { 
    
    res.send('Qualquer coisa entre "ab" e "cd" poderá chamar essa rota.Este caminho pode correnponder a: "abcd", "abbbcd", "ab12345d", "abRAMDOMcd", e assim por diante');
});

app.get('/xy?z', (req, res) => {
    res.send('Define que o caracter anterior a "?" pode ou não pode existir. Essa rota corrensponde a: "xz" e "xyz"');
});

app.get('/12(34)?5', (req, res) => { 
    res.send('O que estiver entre parênteses é opcional "(34)?". Essa rota corresponde a: "125" e "12345"');
});

app.get('/98+7', (req, res) => {
    res.send('Define que o caracter anterior ao "+" pode se repetir quantas vezes forem necessárias. Essa rota pode corresponder a: "987", "9887", "98887", "9888888887" e assim por diante ')
});