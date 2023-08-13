// QUALQUER ENDEREÇO QUE O USUÁRIO DIGITAR QUE TIVER 'LOCALHOST:3000' IRÁ SER EXECULTADO (EX: LOCALHOST:3000/TESTE -> EXECULTARÁ A RESPOSTA DO SERVIDOR) 
// A SOLUÇÃO PARA ISSO É DEFINIR ROTAS (QUANDO O USUÁRIO CHAMAR DETERMINADA URL EXECULTA A SUA RESPECTIVA RESPOSTA)

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html');

    // SISTEMA DE ROTEAMENTO
    let html_file = '';

    switch(req.url){  // VERIFICA A URL CHAMADA

        case '/':    // SE A URL CHAMADA FOR A RAIZ '/' EXIBE O ARQUIVO 'INDEX.HTML' 
            html_file = './views/index.html';
            break;
        
        case '/about':   // SE A URL CHAMADA FOR '/ABOUT' EXIBE O ARQUIVO 'ABOUT.HTML'
            html_file = './views/about.html';
            break;

        default:   // SE A URL CHAMADA NÃO FOR NENHUMA DAS DUAS A PÁGINA EXIBE O ARQUIVO '404.HTML'
            html_file = './views/404.html';
            break;       
    };

    // EXIBINDO A PÁGINA DA URL CHAMADA
    fs.readFile(html_file, (err, pagina) => {
        if(err){
            console.log('DEU RUIM - ' + err);
            res.end();
        }
        else{
            res.write(pagina);
            res.end();
        }
    });
});

server.listen(3000, 'localhost', () => {
    console.log('Servidor Iniciado!');
});
