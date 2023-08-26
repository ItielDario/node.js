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

// DADOS POR PARÂMETRO
app.get('/', (req, res) => {
    
    res.json(api_result('success', 'success', []));
});

app.get('/users/:id', (req, res) => {

    let id = req.params.id;
    
    conexao.query('SELECT * FROM users WHERE id = ?', id, (error, results) => {

        if(error){
            res.json(api_result('error', error.sqlMessage, []));
        }
        else{
            res.json(api_result('success', 'success', results));
        }
    });
});

function api_result(status, message, data){
    
    if(data.length == 0){
        message = 'ID inválido';
    }

    return {
        status: status,
        message: message,
        results: data
    };
}

/*
app.get('/users/:id/', (req, res) => {
    let id = req.params.id;
    
    conexao.query('SELECT * FROM usersa WHERE id = ?', id, (error, results) => {
        if(error){
            console.log('DEU RUIM -> ', error.message);
        }
        else{
            res.json(results);
        }
    });
});
*/


// MYSQL INSERT
app.get('/', (req, res) => {

    // INSERINDO CONJUNTO DE DADOS
    let values = [
        ['0', 'Don Pedro 1', '1500-01-01 10-20-01'],
        ['0', 'Don Pedro 2', '1510-01-01 10-20-02'],
        ['0', 'Don Pedro 3', '1520-01-01 10-20-03'],
        ['0', 'Don Pedro 4', '1530-01-01 10-20-04'],
        ['0', 'Don Pedro 5', '1531-01-01 10-20-05']
    ] 

    conexao.query('INSERT INTO users VALUES ?', [values], (err, resp) => {

        if(err){
            console.log('DEU RUIM -> ', err);
        }
        else{
            res.send('TAÍ MEU FI!!!');
        }
    });
});


// PRIMEIROS TESTES 
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