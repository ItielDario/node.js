// STREAMS É UMA MANEIRA EFICIANTE E CONTROLADA DE LIDAR E MANUPULAR DADOS GRANDES E/OU CONTÍNUOS
// PERMITE QUE VOCÊ PROCESSE OS DADOS CONFORME ELES CHEGAM, AO INVÉS DE ESPERAR CARREGAR-LOS INTEIRAMENTE NA MEMÓRIA
// PODEM SER PROCESSADOS E MANIPLADOS EM PEQUENOS PEDAÇOS, UM DE CADA VEZ

const fs = require('fs');

// CRIANDO UMA STREAM DE LEITURA PARA O ARQUIVO 'DADOS.TXT' E TRANSFORMANDO OS DADOS PARA O PADRÃO DE LINGUAGUEM PORTUGUÊS (UTF-8)
const readStream = fs.createReadStream('./dados.txt');  

// PARECIDO COM O EVENTLISTENER (QUANDO UMA INFORMAÇÃO ESTIVER SENDO LIDA EXECULTA A FUNÇÃO)
readStream.on('data', (dadosLidos) => {
    console.log('##############################################################################################################');
    console.log('##############################################################################################################');
    console.log('##############################################################################################################');
    console.log(dadosLidos);
})  