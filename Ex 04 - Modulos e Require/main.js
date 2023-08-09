console.log('Inicio');

// RECEBENDO O EXPORTAMENTO
let dados = require('./modulos') // IMPOTA PARA O 'MAIN' TODOS OS DADOS/FUNÇÕES DO 'MODULO.JS'
const { frutas, texto } = require('./modulos');  // IMPORTA APENAS UMA PARTE (FRUTAS) DO MÓDULO
const { adicionar } = require('./modulos'); // IMPORTANDO UMA FUNÇÃO

console.log('');
console.log('Estou no main.js');
console.log(dados);
console.log(dados.nomes);
console.log(dados.cidades);
console.log('Nome no indice 1: ' + dados.nomes[1]);
console.log('-------------------------------------');
console.log('');

console.log('Apenas frutas e o texto estão sendo importados: ');
console.log(frutas);
console.log(texto);

console.log('Apenas a função: ');
console.log(adicionar(10, 15));
