const express = require('express');
const TarefaRouter = require('../router/tarefaRoute');

class tarefaController {
    #router

    constructor(){
        this.#router = express.Router();

        let controller = new TarefaRouter();

        this.#router.get('/', controller.viewGet);
        this.#router.post('/', controller.viewPost);
    }

    get router(){
        return this.#router
    }

    incluirController(){

    }
}

module.exports = tarefaController;