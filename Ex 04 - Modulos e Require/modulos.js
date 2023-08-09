const nomes = ['João', 'Ana', 'Carlos'];
const cidades = ['Lisboa', 'Nova Iorque', 'Londres'];
const frutas = ['Morango', 'Maça', 'Banana'];
const texto = 'Hello World! -> do modulo.js';

function adicionar(a, b){
    return a + b;
}

console.log('Estou em modulo.js');
console.log(nomes);
console.log('--------------------------');

// EXPORTANDO AS FUNÇÕES 'CIDADES' E 'NOMES' DO MODULO.JS PARA O ARQUIVO QUE ESTÁ SOLICITANDO (MAIN.JS -> 'IMPORT')
module.exports = { // EXPORTANDO UM OBJETO 
    nomes, 
    cidades,
    frutas,
    texto,
    adicionar
}; 