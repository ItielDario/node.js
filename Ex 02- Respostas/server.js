const http = require('http');
const host = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {

    // RESPOSTAS
    // console.log(res) // RETORNA DADOS ENVIADOS PELO CLIENTE PARA O SERVIDOR ENTENDER O QUE O USUÁRIO ESTA SOLICITANDO

    res.setHeader("Content-Type", "text/plain; charset=utf-8"); // DEFINE QUE O TIPO DE CONTEÚDO (CONTENT-TYPE) DA RESPOSTA VAI SER UM TEXTO SIMPLES (TEXT/PLAIN) COM OS CARACTERES NO PADRÃO UTF-8

    if(req.url == '/'){ // SELECIONA A URL QUE FOI CHAMADA NO SERVIDOR '127.0.0.1:8080'
        res.end('Página inicial do nosso web site'); // SE RETORNAR '/' É PORQUE ESTÁ NA PÁGINA PRINCIPAL
    }
    else if(req.url == '/novapagina'){ // SE RETORNAR '/paginanova' 
        res.end('Pagina nova do nosso web site');
    }
    else if(req.url == '/contato'){ // SE RETORNAR '/paginanova' 
        res.end('Pagina de contato do nosso web site');
    }   
    else{
        res.end('Página desconhecida!');
    }
});

server.listen(port, host, () => {
    console.log('Novo servidor em execução');
})