// O NPM É UMA SISTEMA QUE GERENCIA MÓDULOS/PACOTES EXTERNOS PRÉ-CONSTRUIDOS

// EXITE 2 TIPOS DE MÓDULOS QUE PODEM SER INSTALADOS PELO NPM:
//  - 1º -> MODULOS GLOBAIS (SÓ É INSTALADO UMA VEZ, FICA NO COMPUTADOR E PODE SER UTILIZADO EM QUALQUER PROJETO) 
//  - 2º -> MODULOS LOCAIS (EM TODO PROJETO VOCÊ VAI PRECISAR BAIXA-LOS E SÓ ESTA DISPONIVEL NOS MESMOS)

// NODEMON -> PERMITE A ALTERAÇÃO EM TEMPO REAL DO CÓDIGO QUANDO USAMOS UM SERVIDOR (MÓDULO GLOBAL)
// "npm install -g nodemon" -> CASO DÊ ALGUM ERRO TENTE: "Set-ExecutionPolicy -Scope CurrentUser Unrestricted" (PERMITE O ACESSO)
// PARA DESINSTALAR -> 'npm uninstall -g nodemon'

const http = require('http');

const server = http.createServer((req, res) => {
    
    res.setHeader('Content-Type', 'text/html');

    res.write('<h1>Hello World!</h1>');
    res.end('<h2>Testando o Nodemon</h2>');
});

server.listen(3000, 'localhost', () => {
    console.log('Servidor inicializado!');
});