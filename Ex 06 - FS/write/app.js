// NODE MODULO FILE SYSTEM -> SÃO FUNÇÕES QUE PERMITE INTERAGIR COM OS ARQUIVOS DO COMPUTADOR E DO SERVIDOR
// TODO MÉTODO ASSINCRONO (SEM O SYNC / QUE ENTRA NA FILA DE ESPERA) PRECISA DE UMA FUNÇÃO DE CALLBACK 

const fs = require('fs');  // IMPORTANDO O MÓDULO FILE SYSTEM

// write system -> 
//  - CRIA UM FICHEIRO NOVO SE ELE AINDA DÃO EXTIVER CRIADO E ESCREVE NELE
//  - SE O FICHEIRO EXISTIT SOBRESCREVE O VALOR ATUAL DELE PELO NOVO VALOR

fs.writeFile('dados-01.txt', 'João Ribeiro', () => { // QUANDO TERMINAR DE ESCREVER EXECULTA A FUNÇÃO (FUNÇÃO ASSINCRONA)
    console.log('Ficheiro Escrito!'); // 3º -> (ENTRA NA FILA DE ESPERA)
});

fs.writeFileSync('dados-02.txt', 'Biro Virto');  // 1º -> (TERMINA DE EXECULTAR ESTA LINHA E DEPOIS SEGUE PARA AS OPERAÇÕES ABAIXO)
console.log('Ultimo operação!'); // 2º 


// write file - append -> // ADICIONA DADOS A UM FICHEIRO SEM REMOVER OS DADOS ATUAIS
// SE O FICHEIRO NÃO EXISTIR, CRIA UM
fs.appendFile('./dados-01.txt', '\nAdicionando esta frase ', (erro) => {
    if(erro){
        console.log('Houve um erro!');
    }
    else{
        console.log('Frase adicionada!');
    }
});

fs.appendFileSync('dados-02.txt', '\nInserindo essa frase');  // FORMA SINCRONA 