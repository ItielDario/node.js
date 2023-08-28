class TarefaRouter{

    viewGet(req, res){
        res.render('tarefas');
    }

    viewPost(req, res){
        const tarefa = req.body.descricaoTarefa;
        console.log(tarefa);
        
        if(tarefa == ''){
            res.render('tarefas', { validacao: 'alert-danger', text: 'Por favor, preencha o campo abaixo!' });
        }
        else{
            res.render('tarefas', { validacao: 'alert-success', text: 'Tarefa incluída com sucesso!' });
        }
    }
}

module.exports = TarefaRouter;