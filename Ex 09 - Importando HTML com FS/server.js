const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    if(fs.existsSync('./index.html')){  // VERIFICA SE A PÁGINA HTML EXISTE

        fs.readFile('./index.html', (err, dados) => {  // IMPORTA A PÁGINA HTML
            if(err){
                res.end('DEU RUIM! - ' + err);
            }
            else{  // EXIBE A PÁGINA HTML
                res.end(dados);
            }
        })
    }
    else{
        res.end('404 - PÁGINA NÃO ENCONTRADA!');
    }
});

// QUALQUER ENDEREÇO QUE O USUÁRIO DIGITAR QUE TIVER 'LOCALHOST:3000' IRÁ SER EXECULTADO (EX: LOCALHOST:3000/TESTE -> EXECULTARÁ A RESPOSTA DO SERVIDOR) 
server.listen('3000', 'localhost', () => {  
    console.log('Servidor criado!');
})
