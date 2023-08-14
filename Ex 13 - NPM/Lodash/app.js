// O NPM É UMA SISTEMA QUE GERENCIA MÓDULOS/PACOTES EXTERNOS PRÉ-CONSTRUIDOS

// EXITE 2 TIPOS DE MÓDULOS QUE PODEM SER INSTALADOS PELO NPM:
//  - 1º -> MODULOS GLOBAIS (SÓ É INSTALADO UMA VEZ, FICA NO COMPUTADOR E PODE SER UTILIZADO EM QUALQUER PROJETO) 
//  - 2º -> MODULOS LOCAIS (EM TODO PROJETO VOCÊ VAI PRECISAR BAIXA-LOS E SÓ ESTA DISPONIVEL NOS MESMOS)

// LODASH -> POSSUE FUNÇÕES PARA TRABALHAR COM OBJETOS, ARRAYS, STRINGS, ETC (https://lodash.com)
// PARA INSTALAR: 'npm i lodash' (MÓDULO LOCAL)

const http = require('http');
const lodash = require('lodash');

const server = http.createServer((req, res) => {
    
    res.setHeader('Content-Type', 'text/html');

    res.write('<h1>Hello World!</h1>');
    res.write('<h2>Testando o Lodash</h2>');
    res.write('<h3>Gerando um numero aleatoriamente com lodash:</h3>');
    
    const numGerado = lodash.random(0, 100);
    res.write('<p>Numero gerado: ' + numGerado + '</p>');
    res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('Servidor inicializado!');
});

// SE QUISER COMMITAR MAS ALGUMAS PASTAS VOCÊ NÃO QUER QUE SEJAM COMMITADAS BASTA CRIAR UM ARQUIVO '.gitignore' E COLOCAR O NOME DAS PASTAS NESTE ARQUIVO. QUANDO VOCÊ DER O COMMIT O GIT VAI IGNORAR ESSAS PASTAS.

// 'npm install' -> SERVE PARA INSTALAR TODAS AS DEPENDENCIAS QUE ESTÃO NO 'dependencies' DO 'package.json'