// / NODE MODULO FILE SYSTEM -> SÃO FUNÇÕES QUE PERMITE INTERAGIR COM OS ARQUIVOS DO COMPUTADOR E DO SERVIDOR

const fs = require('fs');

// delete files -> EXLUINDO ARQUIVOS
if(fs.existsSync('./dados-01.txt')){ // VERIFICA SE O ARQUIVO EXISTE
    fs.unlink('./dados-01.txt', (erro) => {
        if(erro){
            console.log('Deu ruim: ' + erro);
        }
        else{
            console.log('Arquivo excluido com sucesso!');
        }
    });
}
else{
    console.log('Arquivo inválido!');
}

