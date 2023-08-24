// MYSQL -> É UM SISTEMA DE GERENCIAMENTO DE BANCO DE DADOS
// PARA UTILIZAR FUNÇÕES NO NODE -> npm install mysql

const express = require('express');
const app = new express();
app.listen(3000, () => {
    console.log('API running!')
});


// MYSQL
const mysql = require('mysql');  // IMPORTA O MÓDULO SQL
const conexao = mysql.createConnection({  // CRIA CONEXÃO COM O BANCO DE DADOS
    host: 'localhost',  // LOCAL ONDE ESTA O SERVIDOR MYSQL
    user: 'user_blog',  // NOME DO USUÁRIO PARA A AUTENTICAÇÃO
    password: 'L7sAV2PiKopIborAM58ege62ri7Ipi',
    database: 'blog',  // NOME DA BASE DE DADOS QUE IRÁ CONSUMIR
});


// ROUTES
app.get('/', (req, res) => {
    
    // ESTABELECENDO CONEXÃO COM O SERVIDOR MYSQL
    // SELECIONA TODOS OS DADOS DA TEBELA 'users'
    conexao.query("SELECT * FROM users", (erro, resultado) => { // EXECULTA CONSULTAS SQL NO BANCO DE DADOS (PERMITE ESCREVE UM SQL LITERAL E DEPOIS EXECULTA UMA FUNÇÃO)  

        if(erro){  // SE DER ALGUM ERRO -> 
            console.log('Deu ruim! -> ', erro.message);
            console.log('Deu ruim! -> ', erro.code);
            console.log('Deu ruim! -> ', erro.errno);
            console.log('Deu ruim! -> ', erro.sqlMessage);
            res.send('Deu ruim! -> ', erro);
        }

        if(resultado.length != 0){
            
            let html = '<ul>';
            resultado.forEach(elem => {
                html += `<li> ${elem.username} </li>`;
            });
            html += '</ul>';

            res.send(html);
        }
        else{
            res.send('Não existem resultados');
        }
        
    });  
});