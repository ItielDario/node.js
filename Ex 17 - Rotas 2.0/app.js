// MAIS SOBRE ROTAS -> https://expressjs.com/pt-br/guide/routing.html 

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
app.get('/ab*cd', (req, res) => { // QUALQUER COISA ENTRE 'B' E 'C' CHAMARÁ ESSA ROTA
    
    res.send('Este caminho pode correnponder a: "abcd", "abbbcd", "abaaaacccccd", "abRAMDOMcd", e assim por diante');
});

app.get('/12(34)?5', (req, res) => { // O QUE ESTIVER ENTRE PARENTESES É OPCIONAL '(34)?'
    res.send('Essa rota pode corresponder a: "125" e "12345"');
});