// O NPM É UMA SISTEMA QUE GERENCIA MÓDULOS/PACOTES EXTERNOS PRÉ-CONSTRUIDOS

// EXITE 2 TIPOS DE MÓDULOS QUE PODEM SER INSTALADOS PELO NPM:
//  - 1º -> MODULOS GLOBAIS (SÓ É INSTALADO UMA VEZ, FICA NO COMPUTADOR E PODE SER UTILIZADO EM QUALQUER PROJETO) 
//  - 2º -> MODULOS LOCAIS (EM TODO PROJETO VOCÊ VAI PRECISAR BAIXA-LOS E SÓ ESTA DISPONIVEL NOS MESMOS)

// PACKAGE JSON -> DESCREVE AS INSFORMAÇÕES DO PROJETO COMO: DEPENDÊNCIAS, SCRIPTS, DESCRISÃO, VERSÃO, LICENÇA, ETC (MÓLULO LOCAL)
// PARA INSTALAR: 'npm init'

const http = require('http');

const server = http.createServer((req, res) => {
    
    res.setHeader('Content-Type', 'text/html');

    res.write('<h1>Hello World!</h1>');
    res.end('<h2>Testando o Nodemon</h2>');
});

server.listen(3000, 'localhost', () => {
    console.log('Servidor inicializado!');
});

// 'npm install' -> SERVE PARA INSTALAR TODAS AS DEPENDENCIAS QUE ESTÃO NO 'dependencies' DO 'package.json'