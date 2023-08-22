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
    host: 'localhost',  // O ENDEREÇO DO SERVIDOR DO BANCO DE DADOS
    user: 'root',  // NOME DO USUÁRIO PARA A AUTENTICAÇÃO
    password: '',  // SENHA DO USUÁRIO PARA AUTENTICAÇÃO
    database: 'blogs'  // NOME DO BANCO DE DADOS QUE DESEJA CONECTAR
});


// ROUTES
app.get('/', (req, res) => {
    
    // SELECIONA TODOS OS DADOS DA TEBELA 'users'
    conexao.query("SELECT * FROM users", (erro, resultado) => { // EXECULTA CONSULTAS SQL NO BANCO DE DADOS (PERMITE ESCREVE UM SQL LITERAL E DEPOIS EXECULTA UMA FUNÇÃO)  

        
        if(erro){  // SE DER ALGUM ERRO -> 
            console.log('Deu ruim! -> ', erro.message);
            console.log('Deu ruim! -> ', erro.code);
            console.log('Deu ruim! -> ', erro.errno);
            console.log('Deu ruim! -> ', erro.sqlMessage);
            res.send('Deu ruim! -> ', erro);
        }

        res.send(resultado[2].username);
    });  
});