const express = require('express');
const tarefaController = require('./controller/tarefaController');
const { urlencoded } = require('body-parser');
const bodyParser = require('body-parser');
const app = express();
app.listen(3000, () => {
    console.log('Server running');
});

app.set('view engine', 'ejs');

app.use(express.urlencoded());
app.use(express.static('public'));

const tarefa = new tarefaController();
app.use('/', tarefa.router)