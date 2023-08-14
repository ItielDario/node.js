// EXPRESS -> É UM FRAMEWORK QUE FACILITA EGERENCIA E GERENCIA ROTAS, FS, RESPOSTAS, REQUISIÇÕES, ETC 
// PARA INSTALAR: 'npm install express' 

const express = require('express');

// CRIANDO UMA APLICAÇÃO EXPRESS
const app = express()  // CRIA UM OBJETO APARTIR DO EXPRESS

// ESCUTAANDO A REQUISIÇÃO NA PORTA 3000
app.listen(3000);

// CRIANDO AS ROTAS
app.get('/', (req, res) => {  // QUANDO SOLICITADO A PÁGINA RAIZ '/' EXECULTA A FUNÇÃO  
    
    res.send('<h1>Aplicação com express</h1>')  // ENVIA UMA REPOSTA
})

app.get('/about', (req, res) => {
    res.send('<h1>Sobre nós</h1>');
})