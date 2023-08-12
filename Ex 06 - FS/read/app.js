// NODE MODULO FILE SYSTEM -> SÃO FUNÇÕES QUE PERMITE INTERAGIR COM OS ARQUIVOS DO COMPUTADOR E DO SERVIDOR

const fs = require('fs');  // IMPORTA O MÓDULO FILE SYSTEM

// VERIFICA SE O FICHEIRO EXISTE E DEPOIS CONTINUA O CÓDIGO ABAIXO (DE FORMA SINCRONA)
if(fs.existsSync('./dados.csv')){

    // read system -> LÊ FICHEIROS
    // QUANDO TERMINAR DE LER O FICHEIRO EXECULTA A FUNÇÃO (MÉTODO ASSINCRONO -> ENTRARÁ EM UMA FILA)
    fs.readFile('./dados.csv', (erro, dadosDoFicheiro) => {  
        
        if(erro) {  // SE DER ERRO
            console.log('---- DEU RUIM ----: ' + erro);
        }
        else{  // SE NÃO DER ERRO
            console.log('---- DADOS DO FICHEIRO ----:' + dadosDoFicheiro.toString()); // CONVERTE OS DADOS PARA STRINGS
        }
    });

    
    // EXECULTA A FUNÇÃO ANTES DE QUALQUER OUTRO COMANDO SEGUINTE
    let dados = fs.readFileSync('./dados.csv', )
    console.log('-------------- Esta sendo execultado primeiro: --------------' + dados.toString());  
}
else{  // SE NÃO ENCONTRAR O FICHEIRO
    console.log('Ficheiro não encontrado!');
}

console.log('Ultima operação'); // EXECULTARÁ PRIMEIRO