// MIDDLEWARE -> SÃO CÓDIGOS QUE SÃO EXECULTADOS ENTRE A REQUISIÇÃO E A RESPOSTA 
/*
    - REGISTRO DE LOGS 
    - FUNCIONALIDADES DE AUTENTICAÇÃO E AUTORIZAÇÃO
    - VALIDAÇÃO E PREPARAÇÃO DE DADOS JSON A PARTIR DO REQUEST
    - RESPONDER ERROS DA APLICAÇÃO
*/ 
// MORGAN -> É UM MIDDLEWARE QUE REGISTRA INFORMÇÕES DE SOLICITAÇÕES HTTP
// PARA BAIXAR -> npm install morgan

const express = require('express');
const morgan = require('morgan');

const app = express()  

app.set('view engine', 'ejs'); 

app.listen(3000);



// MIDDLEWARE ------------------------------------------------------------------------------------------------------------------
// FORMA TRADICIONAL
app.use((req, res, next) => {  // COMO NÃO ESPECIFICA A ROTA, SEMPRE QUE SOLICITADO 'LOCALHOST:3000' A FUNÇÃO SERÁ EXECULTADA 

    console.log('Novo pedio');
    console.log('Host: ' + req.hostname);
    console.log('Path: ' + req.path);
    console.log('Method: ' + req.method + '\n\n');

    // TEMOS QUE DEFINIR O QUE FAZER DEPOIS POIS O SERVIDOR FICA AGUANDANDO UMA RESPOSTA A SER ENTREGUE
    next();  // INDICA AO SERVIDOR QUE DEPOIS DE EXECULTAR A FUNÇÃO PODERÁ CONTINUAR EXECULTANDO O CÓDIGO ABAIXO
});


// UTILIZANDO O MORGAN (MONITORA O COMPORTAMENTO DO SISTEMA)
app.use(morgan('tiny')); // EXIBE INFORMAÇÕES BÁSICAS SOBRE A REQUISIÇÃO (UTILIZA O MORGAN NO FORMATO 'TINY')
app.use(morgan('dev')); // O FORMATO DEV EXIBE INFORMAÇÕES NO SISTEMA COM MAIS DETALHES 
app.use(morgan(' :status :res[content-length] - :response-time ms :method :url')); // DEFINE QUAIS E COMO AS INFORMAÇÕES SERÃO EXIBIDAS 
app.use(morgan('O método é: :method'));


// PARA ACESSAR ARQUIVOS ESTÁTICOS É PRECISO DEFINIR ONDE ESSES ARQUIVOS ESTÃO (FACILITA A PROCURA DOS ARQUIVOS NO SERVIDOR)
app.use(express.static('public')); // DEFINE QUE A PASTA 'PUCLIC' É A RAIZ DOS ARQUIVOS ESTÁTICOS 



// CRIANDO AS ROTAS ------------------------------------------------------------------------------------------------------------
app.get('/', (req, res) =>{
    res.render('home', { title: "Home" });  
}); // DEPOIS DE DAR A RESPOSTA NÃO CONTINUA O CÓDIGO ABAIXO


app.use((req, res, next) => { 
    
    // ESSA MENSAGEM SO SERÁ EXIBIDA PARA AS ROTAS ABAIXO DESTE 'USE'
    console.log('\n\nSegundo Middleware!\n\n');
    next();
})


app.get('/contact', (req, res) => {
    res.render('contact', { title: "Contato" })
    res.status(200); 
});

app.get('/info', (req, res) => {
    res.render('info', { title: "Informações" });  
    res.status(200); 
});

app.get('/services', (req, res) => {

    const servicos = [
        {titulo_servico: 'Desenvolvimento Web', descricao: 'Desenvolvemos páginas e apps web'},
        {titulo_servico: 'Desenvolvimento Desktop', descricao: 'Desenvolvemos aplicações para Desktop'},
        {titulo_servico: 'Desenvolvimento Mobile', descricao: 'Desenvolvemos apps mobile para Android e para IOS'}
    ];

    res.render('services', { title: "Serviços", servicos });
    res.status(200); 
});

// ERROR 404
app.use((req, res) => {  // (MIDDLEWARE) SE NENHUMA DESTAS ROTAS ACIMA FOREM CHAMADAS EXECULTA ESSA FUNÇÃO
    res.status(404).render('404', { title: "ERROR - 404" }); 
});