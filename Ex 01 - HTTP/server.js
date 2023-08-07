// UMA DAS FUNCIONALIDADES DO NODE.JS É PERMITIR A CRIAÇÃO DE UM SERVIDOR COM JAVASCRIPT ATRAVEZ DE UM MODULO CHAMADO 'HTTP'
// ESSE SERVIDOR PODE RODAR DENTRO DE UM SERVIDOR WEB E RECEBER REQUISIÇÕES E EMITIR RESPOSTAS

const http = require('http');  // IMPORTA O MÓDULO 'HTTP' COM DIVERSAS FUNÇÕES
const host = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => { // CRIA O SEVIDOR

    //RESPOSTA
    res.end('Teste novo de Node.js V-2');
});

// COLOCA O SERVIDOR PARA FUNCIONAR NA PORTA '8080' E COM O NOME '127.0.0.1' E ESPERA SER CHAMADO
server.listen(port, host, () => {  // QUANDO CHAMADO EXECULTA O 'CREATESERVER' E GERA A RESPOSTA
    console.log('Servidor em execução.');
});


//------------------------------------------------------------------------------------------------------------------
/*
    - FORMA SIMPLES:

http.createServer((request, response) => { // CRIA UM SERVIDOR
    
    // RESPOSTA
    response.end('teste dois');

}).listen(8080); // ESPERA SER SOLICITADO A PORTA 8080 E EXECULTA A ARROW FUNCTION COM A RESPOSTA 
*/