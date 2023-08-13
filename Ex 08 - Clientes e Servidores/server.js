const http = require('http');

const server = http.createServer((req, res) => {  // CRIANDO UM SERVIOR
    // SEMPRE QUANDO CHAMADO EXECULTA O CÓDIGO AQUI DENTRO

    // REQ -> ARMAZENARÁ TODOS OS DADOS RELACIONADOS A REQUISIÇÃO/PEDIDO
    console.log(req.url); // EXIBIRÁ A RAIZ '/' DO SISTEMA 
    console.log(req.method); // EXIBIRÁ O MÉDOTO UTILIZADO


    // RES -> ARMAZERNARÁ TODOS OS DADOS RELACIONADOS A RESPOSTA QUE ENVIAREMOS AO BROWSER
    res.setHeader('Content-Type', 'text/html') // DEFINE O TIPO DE CONTEÚDO DA RESOSTA (DIZ AO BROWSER QUE O TIPO DE CONTEÍUDO QUE ESTÁ CHEGANDO DE SER INTERPRETADO COMO HTML)

    res.write('<head>');
        res.write('<meta charset="UTF-8">');
        res.write('<link href="style.css" rel="stylesheet">');
    res.write('</head>');

    res.write('<h1>Comecando a resposta</h1>');  // COMEÇA UMA RESPOSTA
    res.write('<h2>Sub-Título</h2>');
    res.write('<p>Pagrágrafo</p>');
    res.end('Terminando a resposta'); // TERMINA UMA RESPOSTA
    
});

server.listen(3000, 'localhost', () => {   // FICA ESCUTANDO / ESPERANDO SER CHAMADO 
    console.log('Servidor iniciado')
}) 