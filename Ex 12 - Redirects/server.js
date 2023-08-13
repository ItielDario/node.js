/* RESPONSE STATUS CODE -> DESCREVE O TIPO DE RESPOSTA ENVIADA PARA O BROWSER

    - 200 -> TUDO OK
    - 301 -> O RECURSO MUDOU PARA OUTRO LOCAL (REDIRECT)
    - 404 -> RECURSO NÃO ENCONTRADO
    - 500 -> ERRO INTERNO DO SERVIDOR


    GRUPOS DE RESPOSTAS:
        - 100 À 199 -> RESPOSTAS INFORMATIVAS
        - 200 À 299 -> CÓDIGOS DE SUCESSO (SUCESSO TOTAL E SUCESSO COM ATENÇÃO)
        - 300 À 399 -> REDIRECIONAMENTOS
        - 400 À 499 -> ERROS DE CLIENTE OU USUÁRIO 
        - 500 À 599 -> ERROS INTERNO DE SERVIDOR
*/

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html');

    html_file = '';
    switch(req.url){
        case '/': 
            html_file = './views/index.html';
            res.statusCode = 200;  
            break;
        
        case '/contact': 
            html_file = './views/contact.html';
            res.statusCode = 200;  
            break;

        case '/telefone': // SE O USUÁRIO DIGITAR ESTA URL
            
            res.setHeader('Location', '/contact') // SERÁ REDIRECIONADO PARA O './CONTACT' (A URL SERÁ ALTERADA PARA 'LOCALHOST:3000/CONTACT E ENTRARÁ NOVAMENTE NO SWITCH/CASE)
            res.statusCode = 301; // O RECURSO MUDOU PARA OUTRO LOCAL (FOI REDIRECIONADO)
            res.end();  // FINALIZA A PÁGINA 'LOCALHOST:3000/TELEFONE'
            break;

        default:
            html_file = './views/404.html';
            res.statusCode = 404;  
    };

    fs.readFile(html_file, (err, dados) => {
        if(err){
            console.log('DEU RUIM - ' + err);
            res.end();
        }
        else{
            res.write(dados);
            res.end();
        }
    })
});

server.listen(3000, 'localhost', () => {
    console.log('Servidor Iniciado!');
})