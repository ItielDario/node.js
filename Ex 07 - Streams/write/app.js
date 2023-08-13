// STREAMS É UMA MANEIRA EFICIANTE E CONTROLADA DE LIDAR E MANUPULAR DADOS GRANDES E/OU CONTÍNUOS
// PERMITE QUE VOCÊ PROCESSE OS DADOS CONFORME ELES CHEGAM, AO INVÉS DE ESPERAR CARREGAR-LOS INTEIRAMENTE NA MEMÓRIA
// PODEM SER PROCESSADOS E MANIPLADOS EM PEQUENOS PEDAÇOS, UM DE CADA VEZ

const fs = require('fs');

// WRITE STREAMS - ESCRITA NO ARQUIVO
const escrita = fs.createWriteStream('./output.txt')

for(let i = 0; i < 10; i++){
    escrita.write('O meu texto!\n');
}


// COPIANDO INFORMAÇÕES DE UM ARQUIVO PARA OUTRO
const readStream = fs.createReadStream('../read/dados.txt', { encoding: 'utf-8' });
const writeStream = fs.createWriteStream('./copia-dos-dados.txt');

readStream.on('data', (dados) => {
    writeStream.write('\n\n#################################################################################################################\n\n');
    writeStream.write(dados);
});