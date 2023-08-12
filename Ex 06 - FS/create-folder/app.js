// NODE MODULO FILE SYSTEM -> SÃO FUNÇÕES QUE PERMITE INTERAGIR COM OS ARQUIVOS DO COMPUTADOR E DO SERVIDOR

const fs = require('fs');

// create folder ->  CRIAÇÃO DE PASTAS
if(!fs.existsSync('./pasta-02')){ // VERIFICA SE NÃO EXISTE A PASTA

    fs.mkdir('./pasta-02', (erro) => {
        if(erro){ // SE JA EXISTE UMA PASTA COM O MESMO NOME DA ERRO (file already exists)
            console.log(erro);
        }
        else{
            console.log('Pasta criada!');
        }
    });
}
else{ // SE EXISTIR
    console.log('A pasta já existe')
}

// remove folder - REMOVE UMA PASTA
setTimeout(() => { // DEPOIAS DE 5 SEG REMOVE A PASTA
    
    const pastaRemovida = './pasta-02'

    if(fs.existsSync(pastaRemovida)){  // SE A PASTA EXISTIR, REMOVE A PASTA
        
        fs.rm(pastaRemovida, {recursive: true}, (erro) => {  // { RECURSIVE: TRUE } -> REMOVE A PASTA E SEUS CONTEUDOS
            if(erro){
                console.log(erro);
            }
            else{
                console.log('A pasta ' + pastaRemovida + ' foi removida!');
            }
        })  
    }
    else{  // SE NÃO EXISTIR
        console.log('A pasta não existe!')
    }
}, 5000);


console.log('Ultima operação');